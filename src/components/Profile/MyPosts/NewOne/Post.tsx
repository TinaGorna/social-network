import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/state";

type PostPropsType = {
    img: string
    message: PostType[]
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.popjustice.com/wp-content/uploads/2020/09/Ava-Max-2020-press.jpg" alt="ava"/>
            {props.message}
        </div>
    )
}

export default Post;