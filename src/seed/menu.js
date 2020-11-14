const menu = {
  title: 'Notebooks',
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
        clickable: true
      },
      contents: [{
        title: "Python",
        clickable: true
      }, {
        title: "Redux",
        clickable: false
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
      }, {
        title: "Image Processing",
        clickable: true
      }]
    },
    // section 5
    {
      header: {
        title: "Computer Science",
        clickable: false
      },
      contents: [{
        title: "Algorithms",
        clickable: true
      }, {
        title: "Data Structures",
        clickable: true
      }]
    }
  ]
};

export default menu;
