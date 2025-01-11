const videoData = [
    {
        videoId: "ad_video_1",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/lHLBJ4yRMn8?autoplay=1&cc_load_policy=1" title="American Airlines | Stand Up Comedy | Ft  @AnubhavSinghBassi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "American Airlines | Stand Up Comedy | Ft @AnubhavSinghBassi",
        thumbnail: "images/bassiVideo.jpg",
        description: "This is a short description of Video 1.",
        views: 1345,
        likes: 465,
        uploadDate: "9 months ago",
        genre:"comedy",
        comments: [
          { userName: "User1", commentId: "c1", text: "Great video!" },
          { userName: "User2", commentId: "c2", text: "Loved it!" },
        ],
      },
      {
        videoId: "ad_video_2",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/Q9OW4iaQl-k?autoplay=1&cc_load_policy=1" title="Coding | Stand-Up Comedy by Mohd Suhel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "Coding | Stand-Up Comedy by Mohd Suhel",
        thumbnail: "images/codingComedy.jpg",
        description: "This is a short description of Video 2.",
        views: 1592,
        likes: 478,
        uploadDate: "6 months ago",
        genre:"comedy",
        comments: [
          { userName: "User3", commentId: "c3", text: "Very informative." },
          { userName: "User4", commentId: "c4", text: "Good work!" },
        ],
      },
      {
        videoId: "ad_video_3",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/Az38f7cUzK8" title="School | Aakash Gupta | Stand-up Comedy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "School | Aakash Gupta | Stand-up Comedy",
        thumbnail: "images/aakashGupta.jpg",
        description: "This is a short description of Video 3.",
        views: 1432,
        likes: 441,
        uploadDate: "4 months ago",
        genre:"comedy",
        comments: [
          { userName: "User5", commentId: "c5", text: "Amazing content!" },
          { userName: "User6", commentId: "c6", text: "Very helpful." },
        ],
      },
      {
        videoId: "ad_video_4",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/IEfBBYmxtIo" title="UPSC - Stand Up Comedy Ft. Anubhav Singh Bassi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "UPSC - Stand Up Comedy Ft. Anubhav Singh Bassi",
        thumbnail: "images/upsc.jpg",
        description: "This is a short description of Video 4.",
        views: 1567,
        likes: 490,
        uploadDate: "2 years ago",
        genre:"comedy",
        comments: [
          { userName: "User7", commentId: "c7", text: "Outstanding!" },
          { userName: "User8", commentId: "c8", text: "Keep it up!" },
        ],
      },
      {
        videoId: "ad_video_5",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/IcAV5qiko8M" title="Abhishek Upmanyu - Jealous of Sabziwala (FULL SPECIAL)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "Abhishek Upmanyu - Jealous of Sabziwala (FULL SPECIAL)",
        thumbnail: "images/abhimanyu.jpg",
        description: "This is a short description of Video 5.",
        views: 1478,
        likes: 450,
        uploadDate: "8 months ago",
        genre:"comedy",
        comments: [
          { userName: "User9", commentId: "c9", text: "Nice explanation!" },
          { userName: "User10", commentId: "c10", text: "Loved this one." },
        ],
      },
      {
        videoId: "ad_video_6",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/aWmUVINkzS8" title="Watch this before you start Coding! 5 Tips for Coders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "Watch this before you start Coding! 5 Tips for Coders",
        thumbnail: "images/coding1.jpg",
        description: "This is a short description of Video 6.",
        views: 1389,
        likes: 445,
        uploadDate: "1 year ago",
        genre:"coding",
        comments: [
          { userName: "User11", commentId: "c11", text: "Very entertaining!" },
          { userName: "User12", commentId: "c12", text: "Superb editing." },
        ],
      },
      {
        videoId: "ad_video_7",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/WXqOc-oor-E" title="Two Weeks is what it takes..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "Two Weeks is what it takes...",
        thumbnail: "images/coding2.jpg",
        description: "This is a short description of Video 7.",
        views: 1287,
        likes: 437,
        uploadDate: "4 months ago",
        genre:"coding",
        comments: [
          { userName: "User13", commentId: "c13", text: "Very creative!" },
          { userName: "User14", commentId: "c14", text: "Amazing concept." },
        ],
      },
      {
        videoId: "ad_video_8",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/NkwFxeHARqc" title="Web Development Roadmap 2025 with GenAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "Web Development Roadmap 2025 with GenAI",
        thumbnail: "images/coding3.jpg",
        description: "This is a short description of Video 8.",
        views: 1443,
        likes: 471,
        uploadDate: "1.5 years ago",
        genre:"coding",
        comments: [
          { userName: "User15", commentId: "c15", text: "Brilliant!" },
          { userName: "User16", commentId: "c16", text: "Wow!" },
        ],
      },
      {
        videoId: "ad_video_9",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/GxmfcnU3feo" title="The Complete Web Development Roadmap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "The Complete Web Development Roadmap",
        thumbnail: "images/coding4.jpg",
        description: "This is a short description of Video 9.",
        views: 1524,
        likes: 469,
        uploadDate: "1.8 years ago",
        genre:"coding",
        comments: [
          { userName: "User17", commentId: "c17", text: "So good!" },
          { userName: "User18", commentId: "c18", text: "A must-watch." },
        ],
      },
      {
        videoId: "ad_video_10",
        url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/dPMk6_HTBq8" title="How I&#39;d Learn Full-Stack Web Development (If I Could Start Over)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        title: "How I'd Learn Full-Stack Web Development (If I Could Start Over)",
        thumbnail: "images/coding5.jpg",
        description: "This is a short description of Video 10.",
        views: 1476,
        likes: 488,
        uploadDate: "6 months ago",
        genre:"coding",
        comments: [
          { userName: "User19", commentId: "c19", text: "Awesome video!" },
          { userName: "User20", commentId: "c20", text: "Enjoyed it!" },
        ],
      },
    {
      videoId: "ad_video_11",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/M53gBWkk2WM?list=RDM53gBWkk2WM" title="DIE WITH A SMILE「AMV」" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "DIE WITH A SMILE「AMV」",
      thumbnail: "images/music1.jpg",
      description: "This is a short description of Video 11.",
      views: 1398,
      likes: 467,
      uploadDate: "5 months ago",
      genre:"music",
      comments: [
        { userName: "User21", commentId: "c21", text: "Really good content!" },
        { userName: "User22", commentId: "c22", text: "Highly recommended." },
      ],
    },
    {
      videoId: "ad_video_12",
      url: '<iframe width="893" height="374" src="https://www.youtube.com/embed/Vd7F5VHz5BI?list=RDM53gBWkk2WM" title="ALL NIGHT (LIVE) - AP DHILLON | SHINDA KAHLON (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "ALL NIGHT (LIVE) - AP DHILLON | SHINDA KAHLON (Official Music Video)",
      thumbnail: "images/music2.jpg",
      description: "This is a short description of Video 12.",
      views: 1487,
      likes: 481,
      uploadDate: "2024-11-05",
      genre:"music",
      comments: [
        { userName: "User23", commentId: "c23", text: "Superb!" },
        { userName: "User24", commentId: "c24", text: "Nice work!" },
      ],
    },
    {
      videoId: "ad_video_13",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/HYsz1hP0BFo?list=RDM53gBWkk2WM" title="Lil Nas X - STAR WALKIN&#39; (League of Legends Worlds Anthem)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "Lil Nas X - STAR WALKIN' (League of Legends Worlds Anthem)",
      thumbnail: "images/music3.jpg",
      description: "This is a short description of Video 13.",
      views: 1532,
      likes: 490,
      uploadDate: "3 years ago",
      genre:"music",
      comments: [
        { userName: "User25", commentId: "c25", text: "Awesome explanation!" },
        { userName: "User26", commentId: "c26", text: "Loved the visuals." },
      ],
    },
    {
      videoId: "ad_video_14",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/SlPhMPnQ58k?list=RDM53gBWkk2WM" title="Maroon 5 - Memories (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "Maroon 5 - Memories (Official Video)",
      thumbnail: "images/music4.jpg",
      description: "This is a short description of Video 14.",
      views: 1462,
      likes: 454,
      uploadDate: "4 years ago",
      comments: [
        { userName: "User27", commentId: "c27", text: "Excellent video!" },
        { userName: "User28", commentId: "c28", text: "Very detailed." },
      ],
    },
    {
      videoId: "ad_video_15",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/EgBJmlPo8Xw?list=RDM53gBWkk2WM" title="Billie Eilish - everything i wanted (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "Billie Eilish - everything i wanted (Official Music Video)",
      thumbnail: "images/music5.jpg",
      description: "This is a short description of Video 15.",
      views: 1583,
      likes: 496,
      uploadDate: "6 years ago",
      comments: [
        { userName: "User29", commentId: "c29", text: "Impressive!" },
        { userName: "User30", commentId: "c30", text: "Very creative." },
      ],
    },
    {
      videoId: "ad_video_16",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/rhgwIhB58PA" title="The Biggest Myth In Education" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "The Biggest Myth In Education",
      thumbnail: "images/educational1.jpg",
      description: "This is a short description of Video 16.",
      views: 1324,
      likes: 443,
      uploadDate: "1 year ago",
      comments: [
        { userName: "User31", commentId: "c31", text: "Mind-blowing!" },
        { userName: "User32", commentId: "c32", text: "Great efforts." },
      ],
    },
    {
      videoId: "ad_video_17",
      url: '<iframe width="893" height="447" src="https://www.youtube.com/embed/zaXKQ70q4KQ" title="The Man Who Took LSD and Changed The World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "The Man Who Took LSD and Changed The World",
      thumbnail: "images/educational2.jpg",
      description: "This is a short description of Video 17.",
      views: 1453,
      likes: 458,
      uploadDate: "2 years ago",
      comments: [
        { userName: "User33", commentId: "c33", text: "Very entertaining!" },
        { userName: "User34", commentId: "c34", text: "Loved it!" },
      ],
    },
    {
      videoId: "ad_video_18",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/vc4yL3YTwWk" title="Exposing the Honey Influencer Scam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "Exposing the Honey Influencer Scam",
      thumbnail: "images/educational3.jpg",
      description: "This is a short description of Video 18.",
      views: 1407,
      likes: 472,
      uploadDate: "2 weeks ago",
      comments: [
        { userName: "User35", commentId: "c35", text: "Highly engaging!" },
        { userName: "User36", commentId: "c36", text: "Brilliant!" },
      ],
    },
    {
      videoId: "ad_video_19",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/GlF_2r2L0zM" title="How I Fixed My Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "How I Fixed My Life",
      thumbnail: "images/educational4.jpg",
      description: "This is a short description of Video 19.",
      views: 1548,
      likes: 487,
      uploadDate: "4 months ago",
      comments: [
        { userName: "User37", commentId: "c37", text: "Fantastic!" },
        { userName: "User38", commentId: "c38", text: "So fun!" },
      ],
    },
    {
      videoId: "ad_video_20",
      url: '<iframe width="893" height="502" src="https://www.youtube.com/embed/eEWa7cpiyD8" title="Do you really need to take 10,000 steps a day? - Shannon Odell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      title: "Do you really need to take 10,000 steps a day? - Shannon Odell",
      thumbnail: "images/educational5.jpg",
      description: "This is a short description of Video 20.",
      views: 1503,
      likes: 450,
      uploadDate: "3 years ago",
      comments: [
        { userName: "User39", commentId: "c39", text: "Loved it!" },
        { userName: "User40", commentId: "c40", text: "Will watch again!" },
      ],
    },
  ];
  