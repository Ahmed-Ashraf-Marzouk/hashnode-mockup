let time_0 = document.getElementsByClassName('time-list-item')[0];
let time_1 = document.getElementsByClassName('time-list-item')[1];
let time_2 = document.getElementsByClassName('time-list-item')[2];
let time_3 = document.getElementsByClassName('time-list-item')[3];

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


let trending_articles_1_month = [
    {
        img : 'images/1.jpg',
        title: 'I am a self taught rst tech job, remotely!',
        author: 'Trecia Kat',
        likes: 296,
        comments: 44,
    },
    {
        img : 'images/1.jpg',
        title: 'I built 3 Hachs, and won 1500$ in Prizes',
        author: 'Madza',
        likes: 296,
        comments: 44,
    },
]


let trending_articles_3_months = [
    {
        img : 'images/1.jpg',
        title: 'I am a self t tech job, remotely!',
        author: 'Trecia Kat',
        likes: 296,
        comments: 44,
    },
    {
        img : 'images/1.jpg',
        title: 'I built 3 Hachs, and won 1500',
        author: 'Madza',
        likes: 296,
        comments: 44,
    },
]


let trending_articles_6_months = [
    {
        img : 'images/1.jpg',
        title: 'I am a self taught rst tech job, remotely!',
        author: 'Trecia Kat',
        likes: 296,
        comments: 44,
    },
    {
        img : 'images/1.jpg',
        title: 'I built 3 Hachs, and won 1500$ in Prizes',
        author: 'Madza',
        likes: 296,
        comments: 44,
    },
]


// Hide the articles 

let sbr_articles = document.querySelectorAll('#sbr-articles')[0];
getArticlesWeek();

function getArticles(articles){
    for (let i = 0; i < trending_articles_week.length; i++)
    {

        let article_img = document.querySelectorAll('.sbr-article .sbr-article-img')[i];
        let article_title = document.querySelectorAll('.sbr-article .sbr-article-title')[i];
        let article_author = document.querySelectorAll('.sbr-article .sbr-article-author')[i];
        let article_likes = document.querySelectorAll('.sbr-article .sbr-article-likes-count')[i];
        let article_comments = document.querySelectorAll('.sbr-article .sbr-article-comments-count')[i];

        article_img.setAttribute('src', articles[i].img);
        article_title.innerHTML = articles[i].title;
        article_author.innerHTML = articles[i].author;
        article_likes.innerHTML = articles[i].likes;
        article_comments.innerHTML = articles[i].comments;

    }
}

// Function called onclik for time list items

function getArticlesWeek(){
    time_0.style.borderBottomColor = 'blue';
    time_0.style.color = 'blue';
    time_1.style.borderBottomColor = 'transparent';
    time_1.style.color = 'black';
    time_2.style.borderBottomColor = 'transparent';
    time_2.style.color = 'black';
    time_3.style.borderBottomColor = 'transparent';
    time_3.style.color = 'black';
    getArticles(trending_articles_week);
}

function getArticlesMonth1(){
    time_0.style.borderBottomColor = 'transparent';
    time_0.style.color = 'black';
    time_1.style.borderBottomColor = 'blue';
    time_1.style.color = 'blue';
    time_2.style.borderBottomColor = 'transparent';
    time_2.style.color = 'black';
    time_3.style.borderBottomColor = 'transparent';
    time_3.style.color = 'black';
    getArticles(trending_articles_week);
    getArticles(trending_articles_1_month);
}

function getArticlesMonths3(){
    time_0.style.borderBottomColor = 'transparent';
    time_0.style.color = 'black';
    time_1.style.borderBottomColor = 'transparent';
    time_1.style.color = 'black';
    time_2.style.borderBottomColor = 'blue';
    time_2.style.color = 'blue';
    time_3.style.borderBottomColor = 'transparent';
    time_3.style.color = 'black';
    getArticles(trending_articles_3_months);
}

function getArticlesMonths6(){
    time_0.style.borderBottomColor = 'transparent';
    time_0.style.color = 'black';
    time_1.style.borderBottomColor = 'transparent';
    time_1.style.color = 'black';
    time_2.style.borderBottomColor = 'transparent';
    time_2.style.color = 'black';
    time_3.style.borderBottomColor = 'blue';
    time_3.style.color = 'blue';
    getArticles(trending_articles_6_months);
}
let h = false;
function hideArticles(){
    let articles = document.getElementById('sbr-articles');
    let times = document.getElementById('sbr-time');
    let arrow = document.getElementById('sbr-heading-up-arrow')
    if(h === false){
        articles.style.display = 'none'
        times.style.display = 'none'
        arrow.style.transform =  'rotate(270deg)';
        h = true;
    }
    else
    {
        articles.style.display = 'block'
        times.style.display = 'block'
        arrow.style.transform =  'rotate(90deg)';
        h = false
    }
    
}