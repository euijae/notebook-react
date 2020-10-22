const menu = {
  title: 'Notebook',
  sections: [
    // section 1
    {
      header: {
        title: "What's new",
        clickable: true
      }
    },
    // section 2
    {
      header: {
        title: "Status Planning",
        clickable: true
      }
    },
    // section 3
    {
      header: {
        title: "Language",
        clickable: false
      },
      contents: [{
      //   title: "Cassandra",
      //   clickable: false
      // }, {
        title: "Python",
        clickable: true
      }, {
        title: "Scala",
        clickable: false
      }]
    },
    // section 4
    {
      header: {
        title: "Application",
        clickable: false
      },
      contents: [{
        title: "Autocomplete",
        clickable: true
      // }, {
      //   title: "Spell Checker",
      //   clickable: false
      }, {
        title: "Image Processing",
        clickable: true
      // }, {
      //   title: "Voice Recognition",
      //   clickable: false
      }]
    },
    // section 5
    // {
    //   header: {
    //     title: "Mathematics",
    //     clickable: false
    //   },
    //   contents: [{
    //     title: "Combinatorics",
    //     clickable: true
    //   }, {
    //     title: "Number Theory",
    //     clickable: true
    //   }]
    // }
  ]
};

export default menu;
