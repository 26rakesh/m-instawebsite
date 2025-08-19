# inSTA Web - .NET 8 Project

A modern web application for inSTA (Indian Social Trusted Application) built with ASP.NET Core 8 and MVC architecture.

## 🚀 Features

- **Master Layout**: Centralized header and footer components
- **Responsive Design**: Mobile-first approach with modern CSS
- **MVC Architecture**: Clean separation of concerns
- **Razor Views**: Dynamic content rendering
- **Static Files**: Organized CSS and JavaScript assets

## 📁 Project Structure

```
inSTA-web/
├── Controllers/
│   └── HomeController.cs
├── Views/
│   ├── Home/
│   │   ├── Index.cshtml
│   │   ├── About.cshtml
│   │   ├── Features.cshtml
│   │   └── Contact.cshtml
│   ├── Shared/
│   │   ├── _Layout.cshtml
│   │   ├── _Header.cshtml
│   │   ├── _Footer.cshtml
│   │   └── Error.cshtml
│   ├── _ViewImports.cshtml
│   └── _ViewStart.cshtml
├── wwwroot/
│   ├── css/
│   │   ├── site.css
│   │   ├── header.css
│   │   └── footer.css
│   └── js/
│       └── site.js
├── Program.cs
├── InstaWeb.csproj
├── appsettings.json
└── README.md
```

## 🛠️ Technologies Used

- **.NET 8**: Latest version of .NET framework
- **ASP.NET Core MVC**: Web framework for building web applications
- **Razor**: Server-side markup syntax
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Client-side interactivity
- **HTML5**: Semantic markup

## 🚀 Getting Started

### Prerequisites

- .NET 8 SDK installed on your machine
- Visual Studio 2022 or VS Code with C# extension

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inSTA-web
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Run the application:
```bash
dotnet run
```

4. Open your browser and navigate to:
```
https://localhost:7001
```

## 📱 Pages

- **Home**: Landing page with hero section and features
- **About**: Information about inSTA platform
- **Features**: Detailed feature showcase
- **Contact**: Contact information and form

## 🎨 Design Features

- **Master Layout**: Consistent header and footer across all pages
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Gradient Backgrounds**: Modern gradient designs
- **Hover Effects**: Interactive elements with smooth transitions
- **Card-based Layout**: Clean, organized content presentation

## 🔧 Configuration

The application uses standard ASP.NET Core configuration:

- `appsettings.json`: Main configuration file
- `appsettings.Development.json`: Development-specific settings
- `Program.cs`: Application startup and middleware configuration

## 📦 Dependencies

- `Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation`: For hot reload during development

## 🚀 Deployment

To deploy this application:

1. Build the project:
```bash
dotnet build --configuration Release
```

2. Publish the application:
```bash
dotnet publish --configuration Release --output ./publish
```

3. Deploy the contents of the `publish` folder to your web server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team.

---

**Made with ❤️ in India**
