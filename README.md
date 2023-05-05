# Transcript Analyzer

Transcript Analyzer is a frontend project that allows sales and support team managers to get insights on the quality of outbound calls made by their team members to customers. The app provides a side-by-side comparison between the transcript of the actual call made by the agent and the intended call script for that specific type of call. 

Transcript Analyzer highlights the sentences on both panels where the "similarity" between the actual call transcript and the intended call script is above or equal to the selected "Matching Sensitivity" value. This provides managers with an easy way to evaluate the quality of the call and the agent's adherence to the script. 

The app does not require any server-side setup as all data is mocked, making it purely a frontend project. 

## Getting Started

To get started, first clone this repository to your local machine:

```
git clone https://github.com/jaydedevyn/transcript-analyzer.git
```

Next, install the required packages using npm:

```
npm install
```

## Running the Application

To run the application, use the following command:

```
npm start
```

The application should now be running at `http://localhost:4200`.

## Using the Application

When you first open the application, you will see a list of calls that have been made by team members. Clicking on a call will open a side-by-side comparison between the actual call transcript and the intended call script for that type of call.

The app provides a slider for adjusting the "Matching Sensitivity" value, which changes the minimum "similarity" score required for a sentence to be highlighted as matching. The app also provides the ability to filter calls by agent, date, and call type.

## Conclusion

Transcript Analyzer is a powerful tool for sales and support team managers looking to evaluate the quality of outbound calls made by their team members. The app's side-by-side comparison and highlighting of matching sentences provides a quick and easy way to evaluate agent adherence to the call script and overall call quality. With its intuitive interface and easy-to-use filtering and matching sensitivity controls, Transcript Analyzer is the perfect solution for any team looking to improve their outbound call performance.
