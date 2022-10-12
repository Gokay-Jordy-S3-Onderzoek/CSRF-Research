# CSRF-Research

## What is CSRF?


CSRF also known as Cross Site Request Forgery is that a domain can forge requests for another domain by modifying the parameters in a request.
A CSRF attack is very hard to spot, they might just look like a link or clickable image. But when you click on this link a malicious request can be sent to your api, like deleting your account.

This happens because the victim has an active session to a safe website, and simultaneously opens or visits a malicious site. 
This malicious site then forges a HTTP request for the safe website.

Because the user is logged in it has the rights to execute certain account actions if the api supports it. 
This means if the api has an endpoint named `/delete-account` the malicious website will forge a request for this endpoint.
Then it will include this request as link (For example in a comment under a post) and when the user clicks it the request will be executed and delete your account.

There are multiple ways to protects your application for these kinds of attacks, but we'll get into that later.


## What does an attack look like?

## Solution(s) to CSRF vulnerability?

## How to implement CSRF protection?
