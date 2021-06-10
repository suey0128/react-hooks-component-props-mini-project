import React from "react";


function Article ({ id, title, date="January 1, 1970" , minutes, preview }) {

    const emoji = (minutes) => {
        let x;
        if (minutes<30) {
           x = "☕".repeat(Math.ceil(minutes/5))
        } else {
            x = "🍱".repeat(Math.ceil(minutes/10))
        }
        return x
    }


    return (
        <article key={id}>
            <h3>{title}</h3>
            <small>{date} {emoji(minutes)} mins read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;