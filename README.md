# CSRF-Research

## What is CSRF?

## What does an attack look like?

During a CSRF attack you trick someone into submitting a malicious request. It has to be a request which is "state-changing", 
which changes account-details for example. That way you can make the application do stuff for you while you may not be authorized to do
that certain action.

With most sites, the request will automatically include user credentials and send them along. If a user is logged into his/her account, you can
try to get the victim to execute a malicious URL constructed by you, I'll show an example of what that means below. Without CSRF-protection, 
the application has no way of figuring out whether the request was done by the owner of the account, or someone else with malicious intent. That means
that the application will execute every request like it's a legitimate request. You can see why that's problematic.

## Solution(s) to CSRF vulnerability?

## How to implement CSRF protection?
