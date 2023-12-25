# Team Availability Tracker

## Overview

This project provides a solution for tracking the availability of team members across different time zones and suggests the optimal meeting time when most team members are available.

## How It Works
The solution uses the moment-timezone library to standardize the time zones of team members. It then employs logic to store overlapping time slots in a map, iterating over the map to find the time when the maximum number of team members are available.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/availability-tracker.git

## Usage
Open the testArr.js file.

Update the array with the availability details of team members. Each member should have a start time, end time, and time zone.

```bash

const teamMembersAvailability = [
  // ... update with your team members' availability
];
