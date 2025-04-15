# Swift CV

## Overview

This web application allows users to create and finalize a resume document. It provides various components for inputting personal information, education, work experience, skills, contact details, and a profile image. The application dynamically adjusts the layout based on user interactions and finalization status.

## Try It
Try out the web application [here](https://musical-gecko-73eb6c.netlify.app).

## Functionality

### PDF Generation and Document Size

The web application generates a PDF document of width 8.5 inches without wrapping to new pages. The height of the document can be indefinite, which may exceed standard paper sizes. However, guidelines for letter, legal, and long paper sizes are provided when the document is finalized. These guidelines help users ensure that the resume fits standard printing sizes if they choose to print it.

### Recommendations for Image

To maintain a consistent aspect ratio and avoid unexpected cropping in the PDF, it is recommended to use a square photo for the profile image.

## Components

- **App**: Main component managing the resume finalization state and PDF generation.  
  [App.jsx](./src/App.jsx)
  
- **Area**: Displays sections like Education and Experience with add/delete functionality.  
  [Area.jsx](./src/Area.jsx)
  
- **Contact**: Displays contact information using icons (phone, email, etc.).  
  [Contact.jsx](./src/Contact.jsx)
  
- **Education**: Allows input of educational details such as institution, course, and years.  
  [Education.jsx](./src/Education.jsx)
  
- **Experience**: Provides fields for work experience details including title, company, years, and description.  
  [Experience.jsx](./src/Experience.jsx)
  
- **Header**: Displays header details including first name, last name, and job title.  
  [Header.jsx](./src/Header.jsx)
  
- **Image**: Manages display and editing of a profile image with recommendations for aspect ratio.  
  [Image.jsx](./src/Image.jsx)
  
- **Input**: Handles editable input fields with dynamic edit and save functionality.  
  [Input.jsx](./src/Input.jsx)
  
- **Skills**: Displays input fields for adding skills.  
  [Skills.jsx](./src/Skills.jsx)

## Contribution

Contributions are welcome! Here are some ways you can contribute:

- **Reporting Bugs**: Help identify bugs and issues to improve the application.
- **Suggesting Enhancements**: Provide ideas for new features or improvements.
- **Code Contributions**: Submit pull requests for fixes and new features.
- **Documentation**: Improve the project's documentation.

If you're interested in contributing, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

```bash
git clone https://github.com/Jaizzer/swift-cv.git

```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Conclusion

This web application offers a user-friendly interface for creating and managing resumes, allowing users to dynamically adjust content, finalize the document for printing with size guidelines, and generate a downloadable PDF for both digital and print use.
