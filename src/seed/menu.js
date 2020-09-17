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
        title: "Redux",
        clickable: true
      }, {
        title: "Python",
        clickable: true
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
        title: "Spell Checker",
        clickable: true
      }, {
        title: "Image Processing",
        clickable: true
      }, {
        title: "Voice Recognition",
        clickable: true
      }]
    },
    // section 5
    {
      header: {
        title: "Mathematics",
        clickable: false
      },
      contents: [{
        title: "Combinatorics",
        clickable: true
      }, {
        title: "Number Theory",
        clickable: true
      }]
    }
  ]
};

export default menu;
