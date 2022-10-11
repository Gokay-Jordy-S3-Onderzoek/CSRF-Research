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

### Examples

Every example you'll find on the internet, is given using a fake banking site. I'll be doing the same, because
it makes understanding this concept easier. I'm going to give you two examples: one using a GET request and one using a POST-request.

The difference is a GET request will carry request parameters in the URL itself. Visit any youtube video, you'll see that the URL contains a parameter
called `v`. Example:
```
https://www.youtube.com/watch?v=8jLOx1hD3_o
```

A POST request will not carry request parameters in the URL, but in the body of the request. So this is the URL you'd see in the browser:
```
https://www.youtube.com/watch
```

We're going to invent a new banking site on which you can send money to other people called: `www.totallyrealbank.com`

### GET Example

The app has an endpoint which can be called to transfer a certain amount of money to a different account. Let's
call it `/funds/transfer`. That endpoint takes some URL parameters so that it knows how much money to send, to which account: `?user=435987&amount=200`.

So, if you put all that together, the app will use the following URL to send 200 euros to user with ID 435987:
```
https://www.totallyrealbank.com/funds/transfer?user=435987&amount=200
```

Now, someone who wants to abuse the vulnerability of not having your app protected against CSRF, can take that URL and change the parameter values. He or she
would replace the value of the `user` parameter with their own ID. Let's say the attacker's ID is `987654`.

They could take the URL and change it from:
```
https://www.totallyrealbank.com/funds/transfer?user=435987&amount=200
```
to:
```
https://www.totallyrealbank.com/funds/transfer?user=987654&amount=200
```

What that does is, send 200 euros to the attacker's account. What the attacker now needs to do, is somehow make the victim (who is logged in) execute that URL. The
app is going to take the ID `987654` and send the money without questioning a thing. But how can the attacker execute a URL on the victim's client when they are on
seperate computers?

You can disguise the URL as a link inside an email you send them.

```
<a href="https://www.totallyrealbank.com/funds/transfer?user=987654&amount=200">Open your inbox!</a>
```

If the victim clicks on the button, the URL that's given as the `href` gets executed by the browser because they're logged into their account.

But that requires the victim to click on the link, an even better method is to give it as the `src` in an image-tag, that way it executes on load:

```
<img src="https://www.totallyrealbank.com/funds/transfer?user=987654&amount=200" width="0" height="0" border="0">
```

With the code above there's no image in sight, but it does execute the URL.

## Solution(s) to CSRF vulnerability?

## How to implement CSRF protection?
