import React from 'react';
const Articles = ({ articles }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td >{article.title}</td>
                            <td >{article.upvotes}</td>
                            <td >{article.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;