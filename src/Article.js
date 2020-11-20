import React from 'react';
import moment from 'moment';

const Article = ({ title, date, total_chapter, synopsis }) => {
    return (
        <article className="post">
            <h2>{title}</h2>
            <div className="post-info">
                <span>{moment(date).format('dddd Do, YYYY')}</span>
                <span>Total Chapters: {total_chapter}</span>
            </div>
            <p>{synopsis}</p>
        </article>
    );
}

export default Article;
