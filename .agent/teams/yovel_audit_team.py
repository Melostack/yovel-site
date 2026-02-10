import os
from pathlib import Path
from dotenv import load_dotenv
from agno.agent import Agent
from agno.models.google import Gemini
from agno.tools.file import FileTools

# Load environment variables
load_dotenv()

# Configuration
API_KEY = os.getenv("GEMINI_API_KEY")
model = Gemini(id="gemini-2.5-flash-lite", api_key=API_KEY)

# Define Agents based on their personas

security_auditor = Agent(
    name="Security Auditor",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Elite cybersecurity expert. Focus on OWASP, secrets, and configuration.",
    instructions=[
        "Scan package.json for vulnerable dependencies.",
        "Check source code for hardcoded secrets.",
        "Verify .gitignore includes .env.",
        "Ensure secure HTTP headers are configured (if visible)."
    ],
    markdown=True
)

test_engineer = Agent(
    name="Test Engineer",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Expert in testing and QA.",
    instructions=[
        "Check package.json for test scripts.",
        "Identify if unit tests exist for components.",
        "Evaluate code testability."
    ],
    markdown=True
)

mobile_developer = Agent(
    name="Mobile Developer",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Expert in mobile and responsive web design.",
    instructions=[
        "Review CSS/Tailwind for responsive classes (md:, lg:).",
        "Check touch targets in components.",
        "Verify mobile-first approach in layouts."
    ],
    markdown=True
)

performance_optimizer = Agent(
    name="Performance Optimizer",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Expert in web performance (LCP, CLS, Bundle Size).",
    instructions=[
        "Verify image optimization (WebP usage).",
        "Check for lazy loading.",
        "Review bundle configuration in vite.config.ts."
    ],
    markdown=True
)

devops_engineer = Agent(
    name="DevOps Engineer",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Expert in CI/CD and Deployment.",
    instructions=[
        "Check build scripts in package.json.",
        "Review project structure for deployment readiness.",
        "Check for unnecessary files."
    ],
    markdown=True
)

# Orchestrator
def run_audit():
    print("🚀 Starting Yovel Project Audit...\n")
    
    files_to_check = [
        "package.json",
        "src/App.jsx",
        "src/components/sections/Method.tsx",
        "src/components/sections/Hero.tsx",
        "src/design_tokens.json",
        "vite.config.js"
    ]
    
    file_context = "Files to analyze:\n" + "\n".join(files_to_check)

    # Security Audit
    print("🔒 Running Security Audit...")
    sec_report = security_auditor.print_response(f"Analyze these files for security issues: {files_to_check}. Especially check package.json and component logic.", stream=True)
    
    # Test Audit
    print("\n🧪 Running Test Audit...")
    test_report = test_engineer.print_response(f"Analyze {files_to_check} for testability and existing test setup.", stream=True)

    # Mobile Audit
    print("\n📱 Running Mobile Audit...")
    mob_report = mobile_developer.print_response(f"Analyze 'src/components/sections/Method.tsx' and 'src/App.jsx' for responsive design compliance.", stream=True)

    # Performance Audit
    print("\n⚡ Running Performance Audit...")
    perf_report = performance_optimizer.print_response(f"Analyze {files_to_check}. focus on Method.tsx images and package.json settings.", stream=True)

    # DevOps Audit
    print("\n🏗️ Running DevOps Audit...")
    devops_report = devops_engineer.print_response(f"Check package.json scripts and overall project structure for deployment readiness.", stream=True)

    print("\n✅ Audit Complete.")

if __name__ == "__main__":
    run_audit()
