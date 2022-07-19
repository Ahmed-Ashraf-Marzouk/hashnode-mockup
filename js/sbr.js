let trending_articles_week = [
    {
        img : 'images/1.jpg',
        title: 'I am a self taught developer and I landed my first tech job, remotely!',
        author: 'Trecia Kat',
        likes: 296,
        comments: 44,
    },
    {
        img : 'images/1.jpg',
        title: 'I built 3 Hackathon projects in 3 months, and won 1500$ in Prizes',
        author: 'Madza',
        likes: 296,
        comments: 44,
    },
]

function getArticles(articles){
    for (let i = 0; i < trending_articles_week.length; i++)
    {

        let article_img = document.querySelectorAll('.sbr-article .sbr-article-img')[i];
        let article_title = document.querySelectorAll('.sbr-article .sbr-article-title')[i];
        let article_author = document.querySelectorAll('.sbr-article .sbr-article-author')[i];
        let article_likes = document.querySelectorAll('.sbr-article .sbr-article-likes')[i];
        let article_comments = document.querySelectorAll('.sbr-article .sbr-article-comments')[i];

        article_img.setAttribute('src', articles[i].img);
        article_title.innerHTML = articles[i].title;
        article_author.innerHTML = articles[i].author;
        article_likes.innerHTML = articles[i].likes;
        article_comments.innerHTML = articles[i].comments;

    }
}

getArticles(trending_articles_week);

