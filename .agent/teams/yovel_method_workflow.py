import os
import json
from dotenv import load_dotenv
from agno.agent import Agent
from agno.models.google import Gemini
from agno.team import Team

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY not found")

gemini = Gemini(id="gemini-2.5-flash-lite", api_key=api_key)

# 1. UI/UX Specialist (Token Generator)
ui_ux = Agent(
    name="UI/UX Specialist",
    role="Design System Architect",
    instructions=[
        "You are the source of truth for the Yovel Design System.",
        "Your task is to generate a JSON object with specific design tokens.",
        "Extract/Infer values based on 'Luxury Financial Tech' aesthetic (Meraas inspired).",
        "Tokens required:",
        "  - card_bg: valid tailwind class or hex with opacity for glassmorphism",
        "  - card_border: valid tailwind class or hex",
        "  - stagger_delay: number (seconds) for staggered animation",
        "Output ONLY valid JSON.",
        "Do not use markdown blocks."
    ],
    model=gemini,
)

# 2. Frontend Engineer (Implementation logic)
frontend = Agent(
    name="Frontend Engineer",
    role="React Developer",
    instructions=[
        "You receive the Design Tokens JSON.",
        "Create a plan to usage these tokens in 'Method.tsx' using BentoGrid.",
        "Define the 4 slots: Title, Glass Feature, WebP Image, CTA.",
    ],
    model=gemini,
)

method_team = Team(
    members=[ui_ux, frontend],
    instructions=[
        "Step 1: UI/UX generates design_tokens.json content.",
        "Step 2: Frontend plans the implementation using these tokens.",
        "Goal: Create the 'Method Section' specification."
    ],
    model=gemini,
)

if __name__ == "__main__":
    method_team.print_response(
        "Generate the design_tokens.json content for the Method Section. "
        "Then explain how to use them in Method.tsx with BentoGrid.", 
        stream=True
    )
