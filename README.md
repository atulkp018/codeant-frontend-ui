# CodeAnt Frontend Assignment

## 🚀 Overview
This project is a frontend implementation for CodeAnt AI's Y Combinator-backed platform, focusing on code quality and security. The assignment demonstrates the creation of intuitive user interfaces following provided Figma designs, with emphasis on responsive design and clean code practices.

## ⚡ Live Demo
[Coming Soon]

## 🛠️ Tech Stack
- React.js
- Tailwind CSS
- JavaScript/ES6+
- HTML5/CSS3

## 📱 Features
- Responsive design across all device sizes
- Interactive sign-in interface with dynamic card layouts
- Repository management system
- User dropdown menu with smooth transitions
- Custom navigation system for mobile views
- Stats visualization components

## 🏗️ Project Structure
```
project/
├── public/
│   ├── logo.svg
│   └── substract.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthToggle.jsx
│   │   │   ├── IssuesCard.jsx
│   │   │   ├── SignInOption.jsx
│   │   │   ├── SignInPage.jsx
│   │   │   └── StatsCard.jsx
│   │   └── repositories/
│   │       ├── RepositoryList.jsx
│   │       ├── RepositoryPage.jsx
│   │       └── Sidebar.jsx
│   ├── data/
│   │   └── repositories.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── config files...
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/atulkp018/codeant-frontend-ui.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 💡 Technical Challenges & Solutions

### 1. Custom Responsive Breakpoints
**Challenge:** Tailwind's default breakpoints didn't match the design requirement for mobile toggle at 440px.

**Solution:** Implemented custom breakpoint in tailwind.config.js:

### 2. Sign-in Page Card Positioning
**Challenge:** Achieving precise positioning of overlapping cards with subtract image.

**Solution:** Utilized absolute positioning with z-index management and custom transform properties for precise alignment:


### 3. Mobile Navigation Collapse
**Challenge:** To merge Multiple navigation elements (navbar, footer, user dropdown) into a single dropdown menu in mobile view in Repository page.

**Solution:** I combined navigation, user dropdown, and footer into a single mobile dropdown using `isMobileMenuOpen` for overall visibility and `isUserDropdownOpen` for user options, ensuring responsiveness with conditional rendering.

### 4. Component Reusability
**Challenge:** Repetitive styling patterns across components.

**Solution:** Created custom Tailwind components and utilized CSS variables in the configuration:


## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📧 Contact
Atul Krishna Parauha - atulkp018@gmail.com  
Project Link: https://github.com/atulkp018/codeant-frontend-ui
