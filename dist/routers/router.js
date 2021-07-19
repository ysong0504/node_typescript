"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../schemas/post"));
const router = express_1.default.Router();
// 업로드
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, content } = req.body;
    if (!title) {
        res.status(400).send({
            "errorMsg": "내용없음"
        });
        return;
    }
    yield post_1.default.create({ title, content });
    res.send('성공');
}));
// 조회
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.find({});
    if (!post[0]) {
        res.send("내용없음");
        return;
    }
    res.send(post);
}));
// 삭제
router.delete('/:title', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.params;
    yield post_1.default.deleteOne({ title });
    res.send("삭제 성공");
}));
// 수정
router.put('/:title', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { prev_title } = req.params;
    const { title, content } = req.body;
    const postId = yield post_1.default.findOne({ "title": prev_title });
    console.log(postId['_id'], title, content);
    yield post_1.default.updateOne({ "_id": postId['_id'] }, { $set: { title, content } });
    const post = yield post_1.default.find({});
    res.send("수정 성공");
}));
module.exports = router;
