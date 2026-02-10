import os
from pathlib import Path
from dotenv import load_dotenv
from agno.agent import Agent
from agno.models.google import Gemini
from agno.team import Team
from agno.tools.file import FileTools
# Add path to import local toolkit
import sys
sys.path.append(os.path.join(os.getcwd(), ".agent", "tools"))
from yovel_kit import YovelKitTools

load_dotenv()

# Initialize toolkit
yovel_kit = YovelKitTools()
file_tools = FileTools(base_dir=Path("."))

api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable not set")

gemini_model = Gemini(id="gemini-2.5-flash-lite", api_key=api_key)

# 1. Lead Architect
architect = Agent(
    name="Lead Architect",
    role="Web Strategy Architect",
    instructions=[
        "You are the Lead Architect for the Yovel project.",
        "Your goal is to ensure the implementation of a 'Luxury Financial Tech' aesthetic.",
        "Review and approve design tokens proposed by the Designer.",
        "Supervise the Frontend Engineer and SEO Auditor.",
        "Use run_project_checklist to verify the overall state of the project before approval.",
    ],
    tools=[yovel_kit, file_tools],
    model=gemini_model,
)

# 2. UI/UX Specialist
ui_ux_specialist = Agent(
    name="UI/UX Specialist",
    role="Design System Expert",
    instructions=[
        "Analyze the Meraas design system (meraas.framer.website).",
        "Extract values for border-radius, padding, and typography.",
        "Propose design tokens for the Yovel project.",
        "Use run_ux_audit to check if current components meet high-end standards.",
    ],
    tools=[yovel_kit, file_tools],
    model=gemini_model,
)

# 3. Frontend Engineer
frontend_engineer = Agent(
    name="Frontend Engineer",
    role="React/Tailwind Developer",
    instructions=[
        "Refactor App.tsx to align with the luxury layout of Yovel.",
        "Implement components approved by the Architect.",
        "Use antigravity-kit skills for efficient coding.",
    ],
    tools=[file_tools],
    model=gemini_model,
)

# 4. SEO Auditor
seo_auditor = Agent(
    name="SEO Auditor",
    role="Performance Guardian",
    instructions=[
        "Analyze page performance using available tools.",
        "Block any commit that reduces the performance score below 95.",
        "Validate LCP and other Core Web Vitals.",
        "Use run_performance_audit, run_seo_check and run_security_scan frequently.",
    ],
    tools=[yovel_kit, file_tools],
    model=gemini_model,
)

# Team Orchestration
yovel_team = Team(
    members=[architect, ui_ux_specialist, frontend_engineer, seo_auditor],
    instructions=[
        "Workflow: Designer proposes tokens -> Architect approves -> Frontend implements -> Auditor validates -> Push.",
        "Encourage agents to use their specialized tools in YovelKitTools to validate work.",
    ],
    model=gemini_model,
)

if __name__ == "__main__":
    yovel_team.print_response("Start the redesign workflow for the Hero Section. Just output the Plan.", stream=True)
