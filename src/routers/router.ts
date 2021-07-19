import express, { Request, Response, NextFunction } from 'express'
import Post from "../schemas/post"

const router = express.Router();

// 업로드
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const { title, content } = req.body;
    if (!title) {
        res.status(400).send({
            "errorMsg" : "내용없음"
        })
        return;
    }

    await Post.create({ title, content })
    res.send('성공'); 
});

// 조회
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const post = await Post.find({})
    if (!post[0]) {
        res.send("내용없음")
        return
    }

    res.send(post)
 });

// 삭제
router.delete('/:title', async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.params;
    await Post.deleteOne({ title })
    res.send("삭제 성공")
 });

// 수정
router.put('/:title', async (req: Request, res: Response, next: NextFunction) => {
    const { prev_title } = req.params;
    const { title, content } = req.body;

    const postId = await Post.findOne({ "title": prev_title })
    console.log(postId['_id'], title, content)

    await Post.updateOne({ "_id": postId['_id'] }, { $set: { title, content }})
    const post = await Post.find({})
    res.send("수정 성공")
 });

export = router