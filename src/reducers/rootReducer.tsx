
const initialState = {
    experienceData: [
        {
            id: '1',
            title: 'Junior Software Engineer',
            company: 'DM-AirTech, London',
            duration: 'DEC 2022 - PRESENT',
            responsibilities: [
              'Improved website responsiveness and reduced database costs by 20% through optimizing SQL queries for heavy-load system parts.',
              'Carried out implementation of the design and wrote code in Visual studio community 2022 using ASP.NET, C#, JavaScript, HTML, and SQL Server.',
              'Proposed user-centric webpage designs that delivered valuable products by considering all possible user interactions.',
              'Created a robust backend to manage all the incoming requests (via API\'s) and load of the website, which made it more scalable and efficient using C#.',
              'Efficiently integrated Atmospheric Weather models into the backend via RESTful APIs, resulting in a 90% relevancy rate for frontend results.',
              'Continuously maintained and updated the front-end of the company website using WordPress, while leveraging knowledge of Air-Mobility to propose and implement valuable ideas across both frontend and backend.'
            ]
          },
          {
            id: '2',
            title: 'Junior Developer',
            company: 'Oxara London, London',
            duration: 'MAY 2022 - NOV 2022',
            responsibilities: [
              'Used React and TypeScript to design, build, and carried out 100+ tests of website architecture, ensuring robust data performance.',
              'Collaborated with development teams on feature enhancements, leveraging GraphQL for data handling.',
              'Remained up to date with the new technical solutions and tried to implement them in 3+ projects.',
              'Employed SQL Server to develop 20+ high-quality software solutions based on detailed system requirements.',
              'Analyzed and optimized performance bottlenecks in existing back-end systems such as database queries and storage solutions, utilizing SQL Server to increase system responsiveness.',
              'Authored Node.js back-end code, integrated APIs, and managed systems with CLI tools and GUIs, for system control and management, resulting in 50% faster issue resolution.',
              'Delivered scalable, high-value software designs through strategic problem-solving and testing.',
              'Crafted front-end components using HTML and Tailwind CSS, optimizing for mobile-first and considering cross-browser compatibility issues.'
            ]
          },
          {
            id: '3',
            title: 'Full Stack Engineer',
            company: 'Nurture the Children International, London',
            duration: 'SEPT 2021 - April 2022',
            responsibilities: [
              'Performed and developed 2+ software applications using SQL, JS/TypeScript, HTML, CSS, Docker.',
              'Managed a team of 10 to support agile delivery methods in reviews of work with others as appropriate (such as Sprint Reviews, Pair Programming, Retrospectives).',
              'Utilized User-Centered Design and tested for 2 software design & data-driven iteration.',
              'Continuously learned to improve capabilities across the full stack of technologies.',
              'Ensured digital developments are delivered against GDS standards (and frameworks) and adhered to the Commission IS principles, resulting in 50% scalability growth.',
              'Developed 4+ programs in Java following the Charity Commission standards, as well as producing high-quality software following best practices and coding standards.',
              'Contributed towards the open flow of creative ideas.'
            ]
          }
    ],
};

const rootReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        default:
        return state;
    }
 
};

export default rootReducer;