import os
from dotenv import load_dotenv
from agno.agent import Agent
from agno.models.google import Gemini
from agno.team import Team

load_dotenv()

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
    ],
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
    ],
    # tools=[framer_bridge_tool], # Placeholder for actual tool integration
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
    ],
    model=gemini_model,
)

# Team Orchestration
yovel_team = Team(
    members=[architect, ui_ux_specialist, frontend_engineer, seo_auditor],
    instructions=[
        "Workflow: Designer proposes tokens -> Architect approves -> Frontend implements -> Auditor validates -> Push.",
    ],
    model=gemini_model,
)

if __name__ == "__main__":
    yovel_team.print_response("Start the redesign workflow for the Hero Section. Just output the Plan.", stream=True)
