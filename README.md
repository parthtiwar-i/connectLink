# Team Availability Tracker

## Overview

This project provides a solution for tracking the availability of team members across different time zones and suggests the optimal meeting time when most team members are available.

## Approach
### 1. Time Zone Normalization:
The project begins by normalizing the time zones of team members using the moment-timezone library.
It converts each team member's availability time to Coordinated Universal Time (UTC) for standardized comparison.

### 2. Counting Overlapping Time Slots:
It then counts overlapping time slots using a map to track the number of team members available at each 15-minute interval.
The loop iterates through the availability of each team member and increments the count for overlapping time slots.

### 3.Finding Optimal Meeting Time:
The solution iterates through the map to find the time slot with the maximum overlap, indicating when the most team members are available.

### 4. Error Handling:
The code includes error handling to manage cases where there might be issues processing a member's availability.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/availability-tracker.git

2. **Navigate to the Project Directory:**

   ```bash
   cd availability-tracker
3. **Install Dependencies:**

   ```bash
   npm install
4. **Run the Application:**

   ```bash
   node // path to availableTimeSlot.js

## Usage
Open the testArr.js file.

Update the array with the availability details of team members. Each member should have a start time, end time, and time zone.

```bash

const teamMembersAvailability = [
  // ... update with your team members availability
// ];
