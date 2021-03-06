import React from 'react';
import ArticleNavigation from './ArticleNavigation'
import ArticleContent from './ArticleContent'
import Header from './Header.js';
import Emoji from './Emoji.js';
import {Link} from 'react-router-dom'

function ProjectArticle({match, description, location}) {

  const projectID = match.params.projectID;

  var title = ""
  var desc = ""
  var emoji = ""

  // Had problems with passing props so just switch statement for basic details
  switch(parseInt(projectID)){
    case 1:
      title = 'User Personas';
      desc = 'Using Python + machine learning to extract knowledge from ~1M data points'
      emoji = '📈'
      break;
    case 2:
      title = 'eProjects'
      desc = 'Leading a team of 15 for UBC’s largest entrepreneurship club’s best year'
      emoji = '🅴'
      break;
    case 3:
      title = 'Certificates'
      desc = 'Coming soon...'
      emoji = '🏅'
      break;
    case 4:
      title = 'VICO'
      desc = 'Graduating from Canadian business school and starting as a Spanish speaking software engineer'
      emoji = "🇨🇴"
      break;
    case 5:
      title = 'alexcyph.us'
      desc = "Designing and developing my second personal website in Figma → Reactstrap"
      emoji = "👨‍💻"
      break;
    case 6:
      title = 'Languages'
      desc = "My ongoing battles with the Spanish rr and German adjective endings"
      emoji = "🌎"
      break;
    default:
      break
  }

  var next = parseInt(projectID) + 1
  var last = parseInt(projectID) - 1

  if (next === 6){next = 1}
  if (last === 0){last = 5}

  const rand = Math.max(Math.floor(Math.random()*5), 1)

  return ([
    <div id="none" className="project-article-outer">
      <div className="blobholder">
        <div id="blob-1" class="blob"></div>
      </div>
      <div className="app project-article-inner">
      <Link to={"/"}><div className="brd"><Header link="/" frame={rand} specId={"article"}/></div></Link>
        <div>
        <p className="article-header text-center brd"><Emoji emoji={emoji} desc="emoji"/> {title} <Emoji emoji={emoji} desc="emoji"/></p>
        <p className="article-description brd text-center">{desc}</p>
        </div>
        <ArticleContent projectID={projectID} className="brd"/>
        <ArticleNavigation nextArticle={next} lastArticle={last}/>
        <div className="blobholder-0">
          <div id="blob-1"></div>
          <div id="blob-2"></div>
        </div>
      </div>
    </div>
  ])

}

export default ProjectArticle
