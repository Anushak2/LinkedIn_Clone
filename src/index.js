import "./styles.css";

document.getElementById("app").innerHTML = `

<body >

    <header>
        <div class="global-header">
            <i class="fab fa-linkedin"></i>
            <div class="global-search-bar">
                <i class="fas fa-search"></i>
                <input type="search" name="" id="" placeholder="Search for job, skills, companies..">
            </div>
            <div>
                <nav class="global-nav">
                    <ul>
                        <li> <a href="#"> <i class="fas fa-home"></i> Home</a></li>
                        <li> <a href="#"> <i class="fas fa-user-friends"></i> My Network</a></li>
                        <li> <a href="#"> <i class="fas fa-briefcase"></i> Jobs</a></li>
                        <li> <a href="#"> <i class="fas fa-comment-dots"></i> Messaging</a></li>
                        <li> <a href="#"> <i class="fas fa-bell"></i> Notifications</a></li>
                        <li> <a href="#"> <i class="fas fa-user-circle"></i> Me</a></li>
                        <li> <a href="#"> <i class="fas fa-th"></i> Work</a></li>
                        <li> <a href="#">Get hire faster,Try Premium free</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- Messaging Block -->
    <div class="messaging-section" id="message-block">
        <div>
            <i class="fas fa-user-circle"></i>
            <span class="online-status"></span>
            <span class="text-message">Messaging</span>
            <span class="text-message-count">08</span>
        </div>
        <div class="messaging-section-icons">
            <i class="far fa-edit"></i>
            <i class="fas fa-ellipsis-h"></i>
            <i class="fas fa-chevron-up"></i>
        </div>
    </div>

    <!-- Grid -->
    <div class="main-content">

        <!-- Profile-data -->
        <div class="grid-item">
            <div class="aside profile groups">
                <div>
                    <div id="cover-image"></div>
                    <div id="personal">
                        <a href="#">
                            <i class="fas fa-user-circle"></i>
                            <h3>Anusha K</h3>
                        </a>
                        <p>Aspiring Web developer Intern</p>
                    </div>

                    <div id="statistics">
                        <p>Who viewed your profile <span>200</span></p>
                        <p>Connections <span> 250</span></p>
                    </div>

                    <div id="premium">
                        <a href="#">
                            <h3>Access exclusive tools & insights
                            Get Hired Faster
                            </h3>
                            <span><i class="fas fa-square"></i>Try Premium Free</span>
                        </a>
                    </div>
                    <div id="my-items">
                        <a href="#">
                            <span><i class="fas fa-bookmark"></i> My Items</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="aside groups">
                <div>
                    <span id="recent">Recent</span>
                    <ul>
                        <li><i class="fas fa-users"></i> Front end developer group</li>
                        <li><i class="fas fa-users"></i> Microsoft reactor india</li>
                        <li><i class="fas fa-users"></i> python developer community</li>
                        <li><i class="fas fa-users"></i>react native </li>
                    </ul>

                    <span id="groups"><a href="#">Groups</a></span>
                    <ul>
                        <li><i class="fas fa-users"></i>Front end developer group </li>
                        <li><i class="fas fa-users"></i> Microsoft reactor india</li>
                        <li><i class="fas fa-users"></i> python developer community</li>
                         <li><i class="fas fa-users"></i> react native </li>
                    </ul>

                    <div id="events">
                        <p><a href="#">Events <i class="fas fa-plus"></i></a></p>
                        <p><a href="#">Followed Hashtags</a></p>
                    </div>

                    <div id="discover">
                        <span>Discover More</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Post Component -->
        <div class="grid-item">
            <div class="aside add-post">
                <div>
                    <i class="fas fa-user-circle"></i>
                    <button id="start-post">Start a post</button>
                </div>
                <div>
                    <button>Photo</button>
                    <button>Video</button>
                    <button>Event</button>
                    <button>Write Article</button>
                </div>
            </div>

            <div class="dropdown">
                <button class="sort-post dropbtn" onclick="myFunction()">
                    <hr>
                    <span class="dropbtn" onclick="myFunction()">Sort by: <strong>Top <i
                                class="fas fa-sort-down"></i></strong></span>
                </button>
                <div id="myDropdown" class="dropdown-content">
                    <span>Top</span>
                    <span>Recent</span>
                </div>
            </div>

            <div class="posts">
                <div class="aside post">
                    <div class="post-activity"><a href=""> sheik</a> commented on this <i
                            class="fas fa-ellipsis-h"></i></div>
                    <div class="poster-profile">
                        <i class="fas fa-user-circle"></i>
                        <div>
                            <h4>Sharma Ji</h4>
                            <p>Lorem ipsum</p>
                            <p>1w <i class="fas fa-circle"></i> <i class="fas fa-globe-africa"></i></p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lacus nisl, sit amet elementum elit feugiat quis. Proin eu ante ut quam aliquet fermentum. Etiam est augue, vestibulum at elit in, finibus tincidunt est. Donec id facilisis felis. Nunc vulputate ut leo sed feugiat. Curabitur pharetra augue eget purus auctor ornare. </p>
                         </div>
                </div>


                <div class="aside post">
                    <div class="post-activity"><a href=""> Kunal Chauhan</a> commented on this <i
                            class="fas fa-ellipsis-h"></i></div>
                    <div class="poster-profile">
                        <i class="fas fa-user-circle"></i>
                        <div>
                            <h4>Sharma Ji</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia!</p>
                            <p>1w <i class="fas fa-circle"></i> <i class="fas fa-globe-africa"></i></p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae nam non consequatur
                            enim fugiat commodi asperiores quibusdam quia amet maxime autem repellendus animi, nemo,
                            quod deserunt cupiditate recusandae sequi.
                        </p>

                        <p class="like-comment-emogi">
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="Like">
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="Praise">
                            <!-- <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="Appreciation"> -->
                            <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="Heart">
                            <span>600 <i class="fas fa-circle"></i> 80 comments </span>
                        </p>
                    </div>
                    <div class="like-comment">
                        <button><i class="far fa-thumbs-up"></i> Like</button>
                        <button><i class="far fa-comment-dots"></i> Comment</button>
                        <button><i class="fas fa-share"></i> Share</button>
                        <button><i class="fas fa-paper-plane"></i> Send</button>
                    </div>
                </div>



                <div class="aside post">
                    <div class="post-activity"><a href=""> Kunal Chauhan</a> commented on this <i
                            class="fas fa-ellipsis-h"></i></div>
                    <div class="poster-profile">
                        <i class="fas fa-user-circle"></i>
                        <div>
                            <h4>Sharma Ji</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia!</p>
                            <p>1w <i class="fas fa-circle"></i> <i class="fas fa-globe-africa"></i></p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae nam non consequatur
                            enim fugiat commodi asperiores quibusdam quia amet maxime autem repellendus animi, nemo,
                            quod deserunt cupiditate recusandae sequi.
                        </p>

                        <p class="like-comment-emogi">
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="Like">
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="Praise">
                            <!-- <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="Appreciation"> -->
                            <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="Heart">
                            <span>600 <i class="fas fa-circle"></i> 80 comments </span>
                        </p>
                    </div>
                    <div class="like-comment">
                        <button><i class="far fa-thumbs-up"></i> Like</button>
                        <button><i class="far fa-comment-dots"></i> Comment</button>
                        <button><i class="fas fa-share"></i> Share</button>
                        <button><i class="fas fa-paper-plane"></i> Send</button>
                    </div>
                </div>



                <div class="aside post">
                    <div class="post-activity"><a href=""> Kunal Chauhan</a> commented on this <i
                            class="fas fa-ellipsis-h"></i></div>
                    <div class="poster-profile">
                        <i class="fas fa-user-circle"></i>
                        <div>
                            <h4>Sharma Ji</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia!</p>
                            <p>1w <i class="fas fa-circle"></i> <i class="fas fa-globe-africa"></i></p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae nam non consequatur
                            enim fugiat commodi asperiores quibusdam quia amet maxime autem repellendus animi, nemo,
                            quod deserunt cupiditate recusandae sequi.
                        </p>

                        <p class="like-comment-emogi">
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="Like">
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="Praise">
                            <!-- <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="Appreciation"> -->
                            <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="Heart">
                            <span>600 <i class="fas fa-circle"></i> 80 comments </span>
                        </p>
                    </div>
                    <div class="like-comment">
                        <button><i class="far fa-thumbs-up"></i> Like</button>
                        <button><i class="far fa-comment-dots"></i> Comment</button>
                        <button><i class="fas fa-share"></i> Share</button>
                        <button><i class="fas fa-paper-plane"></i> Send</button>
                    </div>
                </div>




                <div class="aside post">
                    <div class="post-activity"><a href=""> Kunal Chauhan</a> commented on this <i
                            class="fas fa-ellipsis-h"></i></div>
                    <div class="poster-profile">
                        <i class="fas fa-user-circle"></i>
                        <div>
                            <h4>Sharma Ji</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia!</p>
                            <p>1w <i class="fas fa-circle"></i> <i class="fas fa-globe-africa"></i></p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae nam non consequatur
                            enim fugiat commodi asperiores quibusdam quia amet maxime autem repellendus animi, nemo,
                            quod deserunt cupiditate recusandae sequi.
                        </p>

                        <p class="like-comment-emogi">
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="Like">
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="Praise">
                            <!-- <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="Appreciation"> -->
                            <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="Heart">
                            <span>600 <i class="fas fa-circle"></i> 80 comments </span>
                        </p>
                    </div>
                    <div class="like-comment">
                        <button><i class="far fa-thumbs-up"></i> Like</button>
                        <button><i class="far fa-comment-dots"></i> Comment</button>
                        <button><i class="fas fa-share"></i> Share</button>
                        <button><i class="fas fa-paper-plane"></i> Send</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- LinkedIn-News -->
        <div class="grid-item">
            <div class="aside">
                <span class="heading"> LinkedIn News</span>
                <i class="fas fa-info-circle"></i>
                <ul>
                    <li>
                        <span>Tier 2, 3 cities become IT job hotspots</span>
                        <p> 53m ago &bull; 566 readers </p>
                    </li>
                    <li>
                        <span>Want to quit? Read this first</span>
                        <p> 21h ago &bull; 8,456 readers </p>
                    </li>
                    <li>
                        <span> Wipro announces second pay hike</span>
                        <p> 1d ago &bull; 10,529 readers</p>
                    </li>
                    <li>
                        <span>Your age is not your cage</span>
                        <p>1d ago &bull; 15,923 readers</p>
                    </li>
                    <li>
                        <span>Over 8 million jobs in a day in india</span>
                        <p>1d ago &bull; 156,902 readers</p>
                    </li>
                </ul>
            </div>
            <div class="aside">
                <span class="heading">Today's top courses</span>
                <i class="fas fa-info-circle"></i>
                <ol>
                    <li>
                        <span>How to Use Data Visulization to Make..</span>
                        <p>Steve Wexler</p>
                    </li>
                    <li>
                        <span>Time Management: Working from Home</span>
                        <p>Dave Crenshaw</p>
                    </li>
                    <li>
                        <span> Unconscious Bias</span>
                        <p>Stacey Gordon</p>
                    </li>
                </ol>
            </div>
            <div class="banner">
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                    alt="Banner">
            </div>
        </div>
    </div>


`;
