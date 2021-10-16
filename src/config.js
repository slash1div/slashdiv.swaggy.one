// config.js
module.exports = {
    github: {
        username: 'slash1div', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 6, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['slashdiv.swaggy.one', 'yeenoht.ga'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: '',
        twitter: 'slash1div',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: 'slashdiv',
        devto: 'slashdiv',
        website: 'https://swaggy.one',
        phone: '',
        email: 'slashdiv@swaggy.one'
    },
    skills: [
        'Python',
        'HTML',
        'CSS',
        'Lua',
        'C++',
        'Powershell',
    ],
    experiences: [
        { 
            company: 'swaggy.one',
            position: 'Owner',
            from: 'June 2021',
            to: 'Present'
        },
        { 
            company: 'sableye',
            position: 'Developer',
            from: 'May 2021',
            to: 'Present'
        }
    ],
    education: [
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'slashdiv',
        limit: 10 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'halloween',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
