# Login and Signup Pages - Next.js  

This project demonstrates a simple implementation of **Login** and **Signup** pages using 

- **Login Page**  
  - User authentication with email and password.  
  - Form validation for required fields.  
  - Error handling for incorrect credentials.  

- **Signup Page**  
  - User registration with name, email, and password.  
  - Confirmation message upon successful registration.
 
# Challenges

### 1. Fixed Resource Leaks
#### Problem
The application had resource leaks, leading to inefficient resource management and performance degradation.

#### Solution
- Implemented the use of `suspend` for better control over resource allocation and cleanup.
- Ensured proper handling of resources, preventing unnecessary consumption and improving overall performance.

#### Outcome
- Efficient resource management, reducing the likelihood of performance bottlenecks and crashes due to resource leaks.

-

### 2. Improved API Response Handling
#### Problem
The application was struggling to handle different types of API responses, which caused unexpected errors and crashes.

#### Solution
- Added conditional statements to process various API responses (success, failure, and error).
- Implemented robust handling for different response scenarios, ensuring appropriate app behavior.

#### Outcome
- Increased application stability by ensuring the app reacts correctly to all API responses.
- Enhanced user experience by providing smoother handling of edge cases.



## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Sample of website
- **Signup Page**
  
![ui](https://github.com/user-attachments/assets/7f218e8d-c8fa-47d4-bc91-9323359d9a3f)



