const HISTORY_LENGTH = 3; // Number of days of tweets pulled, probab
const LIKE_VALUE = 1; // base points per new like
const REPLY_VALUE = 2; // base points per new reply
const RETWEET_VALUE = 3; // base points per new retweet
// TODO(): make all above constants configurable

// helper functions
function getRowNumbersInRound(roundId){
  let rowNumbers = [];
  // TODO: Get all the row numbers with the Round ID 
  return rowNumbers
}

function getTimestampFromRoundId(roundId){
  let timestamp;
  // TODO: get the timestamp and assign it.
  return timestamp;
}

// scoring waterfall

function scoreRound(roundId){
  // get an list of all the rows which need scoring for the round ID
  const round = getRowNumbersInRound(roundId)
  rounds.forEach((user) => scoreRow(user, roundId))
}

function scoreRow(user, roundId) {
  let accountList = [];
  // TODO: Get the three accounts from the table with the round and user ID
  const accountScores = accountList.map((account) => scoreAccount(account, roundId));
  writeRow(accountScores, roundId, user)

}

function scoreAccount(accountName, roundId){
  const timestamp = getTimestampFromRoundId(roundId);
  // TDOO: get three days of tweets using Search API
  // score each tweet
  // create list of tweets which are eligible to scoread
  // 
}

function scoreTweet(tweetId, timestamp) {

}

// >> Google Sheets (Public Read-Only)
playerSheetColumns = ['Username', 'Total Score', 'Round', 'Account Score 1', 'Account Score 2', 'Account Score 3', 'Timestamp'] //default desc by round


// Scheduler workflow
// Maybe it would be beneficial to have a sheduler workflow which created the round and scheduled the workflows

// Benchmark Event Workflow
//----------------------
// Scheduled Trigger
// Create Round - Post Registration Tweet, save timestamp, round #, TweetId
// Tweet two hour warning
// Tweet one hour warning
// Close of Registration Announcement
// Get all Tweet replies
// For each user, score all of their accounts and create a new row in the sheet
// Run Action to schedule the scoring workflow

// Scoring Event Workflow
//--------------------------
// Trigger on Time Stamp + 3hrs (how will this workflow know what time?)
// Tweet End of Round, beginning of scoring.
// For each user in Google sheets with the specified timestamp, score all their accounts again.  (Make sure we do not score accounts twice!)
// Subtract the scores from three hours ago from the scores from now and update the sheet with the 3hr scores.
//    Note: If I wanted to use this for analytics, I would not want to lose the benchmark data.  It's fine for MVP though.
// Tweet Announcing the Scores (Username/Score)  Link speadsheet in Tweet.
//

// Nice To Have's
// DataViz generation
// Data Rentention
// Custom calibration of like, c