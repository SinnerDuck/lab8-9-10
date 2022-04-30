import React from 'react';
import './More.css';
import {Tab, Tabs, Table} from 'react-bootstrap';



const More = ()=>{
    return (


<>
<div className='div'>
<Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="1" title="2018-2019">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name of Art</th>
      <th>About</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Little Nightmare</td>
      <td>I drew this art in 2018 when I completed the first part of this game. I was very inspired by this because the graphics and story were great.</td>
      <td>1.01.2018</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Dead by Daylight</td>
      <td>For several months, the developers published information about the game and screenshots, and on May 31, 2016, beta testing began[4]. It lasted until June 12, 2016. The game was finally released on June 14, 2016.</td>
      <td>24.09.2018</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Genshin Impact</td>
      <td>Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party.[2] Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks.[3] Characters may have their strengths enhanced in various ways, such as increasing a character's level and improving artifacts and the weapons that the character equips..</td>
      <td>26.09.2018</td>
      
    </tr>
    <tr>
      <td>4</td>
      <td>MLP</td>
      <td>Friendship Is Magic became one of the highest-rated productions in The Hub's history. Despite its target demographic of young girls, the series had an unexpectedly-large following of older viewers (mainly adult men) who called themselves "bronies". The series gave Hasbro new merchandising opportunities. A spin-off franchise (My Little Pony: Equestria Girls) was launched in 2013, and ran alongside the series for six years. A feature-length film adaptation based on the television series, My Little Pony: The Movie, was released in October 2017 in the United States. My Little Pony: Pony Life, a spin-off comedy series, premiered on Discovery Family in November 2020.</td>
      <td>1.01.2018</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Attack On Titan</td>
      <td>An anime television series was produced by Wit Studio (seasons 1–3) and MAPPA (season 4). A 25-episode first season was broadcast from April to September 2013, followed by a 12-episode second season broadcast from April to June 2017. A 22-episode third season was broadcast in two parts, with the first 12 episodes airing from July to October 2018 and the last 10 episodes airing from April to July 2019. A fourth and final season premiered in December 2020, airing 16 episodes in its first part. A second part consisting of 12 episodes aired from January to April 2022, and a third and final part will premiere in 2023.</td>
      <td>24.09.2018</td>
    </tr>
    <tr>
    <td>6</td>
      <td>Fran Bow</td>
      <td>Like other adventure games, gameplay involves seeking various objects in the game world in order to combine and use them to solve puzzles, and speaking with non-player characters to learn more about the world and how to progress. In one scene, the player controls the protagonist's cat. Additionally, a small portion of Fran Bow consists of minigames situated within the broader narrative that present more complex logical challenges.</td>
      <td>26.09.2018</td>
      
    </tr>
  </tbody>
</Table>
  </Tab>
  <Tab eventKey="2" title="2020-2022">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name of Art</th>
      <th>About</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Diabolik Lovers</td>
      <td>Players take on the role as Yui Komori (小森 ユイ, Komori Yui, - default name), who can choose from a variety of male characters as her love interest. In Diabolik Lovers, every playable character's route is split into three sections: Dark, Maniac and Ecstasy. Each of these three sections is split into a prologue, ten subsections, and an epilogue. There are three possible endings for each character based on your choices.

The games were first brought out on PSP, by the third game they were continued in PS Vita / PS TV format, the first two games were soon also brought out in this format. In 2017 it was announced the first three games would be brought out on PlayStation 4. In 2018, a new game titled Diabolik Lovers: Chaos Lineage was announced and released in March 2019 on the Nintendo Switch.</td>
      <td>1.02.2020</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Fairy Tail</td>
      <td>The manga has been adapted into an anime series produced by A-1 Pictures, Dentsu Inc., Satelight, Bridge, and CloverWorks which was broadcast in Japan on TV Tokyo from October 2009 to March 2013. A second series was broadcast from April 2014 to March 2016. A third and final series was aired from October 2018 to September 2019. The series has also inspired numerous spin-off manga, including a prequel by Mashima, Fairy Tail Zero, and a sequel storyboarded by him, titled Fairy Tail: 100 Years Quest. Additionally, A-1 Pictures has developed nine original video animations and two animated feature films.</td>
      <td>24.09.2022</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Sally Face</td>
      <td>Sally Face is an indie adventure game created by Steve Gabry a.k.a. Portable Moose. The game follows the titular main character Sal Fisher (otherwise known as Sally Face), a boy with a prosthetic face, who investigates local murders with his friends. The game consists of 5 episodes that were released between 2016–2019. Sally Face was also released on Nintendo Switch in 2021.[1] Sally Face is an online game that includes characters such as Sal Fisher, Larry Johnson, Todd Morrison, Ashley Campbell, Travis Phelps and more.</td>
      <td>26.09.2021</td>
      
    </tr>
    <tr>
      <td>4</td>
      <td>SOON</td>
      <td>***</td>
      <td>2022?</td>
    </tr>
    <tr>
    <td>5</td>
      <td>SOON</td>
      <td>***</td>
      <td>2022?</td>
    </tr>
    <tr>
    <td>6</td>
      <td>SOON</td>
      <td>***</td>
      <td>2022?</td>
      
    </tr>
  </tbody>
</Table>
  </Tab>
 
</Tabs></div>

</>

    )};

    export default More;