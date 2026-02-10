import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Use the virtual environment with agno installed
# This script should be run with: source .venv/bin/activate && python agno_os.py

from agno.os.app import AgentOS
from agno.models.google import Gemini

# Import our team and workflow
# We add the agents directory to path to allow importing the team module
sys.path.append(os.path.join(os.getcwd(), ".agent", "teams"))

from yovel_team import yovel_team

# Configuration
load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    print("⚠️ Warning: GOOGLE_API_KEY not found in environment.")

# Define the AgentOS app
app = AgentOS(
    teams=[yovel_team],
    # You can also add storage, knowledge base, etc. here if needed
)

if __name__ == "__main__":
    # This will start a FastAPI server, usually on port 7777 (default)
    app.serve(app=app.get_app())
