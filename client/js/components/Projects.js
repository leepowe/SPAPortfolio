import Amok from '../../images/PetsAmok.JPG';
import Guess from '../../images/Guessing Game.JPG';
import MacGyver from '../../images/MacGyver Foods.png';

export default function Projects(){
    return `
    <article class="projects">
        <h1>My Projects</h1>
        <p>
            Over my time in programming I have learned various coding languages and programs. 
            Here are some examples to show what I have learn during my time as a full stack software developer.
        </p>
        <div id="projects">
            <article class="projects__column">
                <h3 class="projectc__column_title">Virtual Pets Amok</h3>
                <figure class="projects__column_figure">
                    <img
                        class="virtualPetsAmok"
                        src="${Amok}"
                        alt="image of virtual pets amok project"
                    />
                    <input
                        type="button"
                        class="projects__column_button"
                        value="Virtual Pets Amok Project"
                    />
                </figure>
                <br />
                <a href="https://github.com/2021-Spring-Part-Time/virtual-pet-leepowe/blob/master/src/main/java/virtual_pet/VirtualPet.java">
                    Virtual Pets Amok project file
                </a>
                <ol class="project__proficiency_list">
                    <li class="poject__technology_list">Technology Used</li>
                        <ul>
                            <li>IntelliJ</li>
                            <li>Eclipse</li>
                        </ul>
                    <li class="project__skills_list">Skills Used</li>
                        <ul>
                            <li>Conditionals</li>
                            <li>Tick Counter</li>
                            <li>If/Else Statements</li>
                            <li>Do While Loops</li>
                            <li>Nested For Loops</li>
                            <li>HashMap</li>
                            <li>Interfaces</li>
                            <li>Abstract Class</li>
                            <li>Inheritance</li>
                            <li>Encapsolation</li>
                            <li>TDD</li>
                        </ul>
                </ol>
            </article>
            <article class="projects__column">
                <h3 class="projects__column_title">MacGyver Foods</h3>
                <figure class="projects__column_figure">
                    <img
                        class="MacGyverFoods"
                        src="${MacGyver}"
                        alt="Image of MacGyver Foods project"
                    />
                    <input
                        type="button"
                        class="projects__column_button"
                        value="MacGyver Foods Project"
                    />
                </figure>
                <br />
                <a href="https://github.com/leepowe/macgyver-foods-repo">MacGyver Foods project file</a>
                <ol class="project__proficiency_list">
                    <li class="project__technology_list">Technology Used</li>
                        <ul>
                            <li>IntelliJ</li>
                            <li>Visual Studio Code</li>
                            <li>API</li>
                        </ul>
                    <li class="project__skills_list">Skills Used</li>
                        <ul>
                            <li>Use existing API</li>
                            <li>Creating an API</li>
                            <li>Add/Remove itmes from an API</li>
                            <li>Creating a login module</li>
                        </ul>
                </ol>
            </article>
            <article class="projects__column">
                <h3 class="projects__column_title">Guessing Game</h3>
                <figure class="projects__column_figure">
                    <img
                        class="guessingGame"
                        src="${Guess}"
                        alt="Image of Guessing Game project"
                    />
                    <input
                        type="button"
                        class="projects__column_button"
                        value="Guessing Game Project"
                    />
                </figure>
                <br />
                <a href="https://github.com/leepowe/guessingGame">Guessing Game project file</a>
                <ol class="project__proficiency_list">
                    <li class="project__technology_list">Technology Used</li>
                        <ul>
                            <li>IntelliJ</li>
                        </ul>
                    <li class="project_skills_list">Skills Used</li>
                        <ul>
                            <li>Teamwork</li>
                            <li>Communication</li>
                            <li>Researching</li>
                            <li>Problem Solving</li>
                        </ul>
                </ol>
            </article>
        </div>
    </article>
    `;
}