import helloImg from '../../images/Lee Powell.jpg';

export default function Contact(){
    return `
    <h1>Contact Me</h1>
    <img class="page-image" src="${helloImg}" alt="">
    <article>
        <h4>Contact Information:</h4>
        <p>lee.powell.code@gmail.com</p>
        <p>(740)258-8590</p>
        <p>... or by social accounts at the bottom of the page.</p>
    </article>
    `;
}