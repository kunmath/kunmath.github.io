---
title: "The Future of Software: From Products to Foundations"
description: "We all love features, spend a lot of time building them. What if the app shipped as a foundation instead, and an agent built the version each person actually needs?"
date: 2026-09-20
tags:
  - ai
  - agents
  - software
---

## The problem with building software for everyone

Everyone who uses software has different needs.

This doesn't mean everyone uses software completely differently. Most people probably use the same few features of an application. But there will always be users who have a particular use case that doesn't fit neatly into the way we designed the product.

For a long time, we have solved this problem by adding more and more features.

We build abstractions so that different kinds of users can use the same product. We add configuration options. We add workflows. We add integrations. We add features for specific customers or specific edge cases.

And this makes sense. If we want our software to serve more people, we need it to be capable of solving more problems.

But there is a cost to this approach.

## When software starts fighting its users

As developers, we often end up building things for particular use cases that aren't necessarily the way we would have designed the system from the beginning.

A customer needs something, so we add a feature for them.

Another customer needs a slightly different workflow, so we add another abstraction.

Someone needs a special case, so we make the architecture support that special case.

Individually, these decisions can all make sense. But over time, they accumulate. The codebase becomes harder to understand. The architecture starts carrying decisions that were made for very specific users or situations.

The same thing happens to the user experience.

We end up with software that can do hundreds of things, but the user has to understand hundreds of things just to use the five things they actually need.

## Jira is a good example

This is where I started thinking about Jira.

Jira has an enormous amount of functionality. It can probably solve a huge variety of problems for different teams and organizations. And that's a good thing. I don't think the answer is to remove those features.

The problem is that the user has to understand Jira's model of how work is organized in order to use Jira effectively.

There are layers and layers of configuration. There are different views, workflows, fields, filters, boards, dashboards, and so on.

If I want to get a very small piece of information out of the system, I may have to understand several layers of the product before I can get there.

And this is an important distinction.

**The problem isn't that the software has too many features.**

The problem is that the user is forced to interact with the software through the model that the software was designed around.

## What if software could adapt to the user?

What if we didn't have to expose all of the capabilities of an application to every user?

Imagine that I use only five or six things from Jira.

Why can't the software simply become a really good application for those five or six things?

The underlying system can still have hundreds of features. The company can continue building new capabilities. Nothing has to be removed.

But the user doesn't necessarily need to see all of it.

Instead, the user could tell an agent how they want to work with the application.

The agent could understand what the user actually needs and create an interface or workflow around those needs.

The software would still be the same software underneath. But the experience could be different for every user.

## Software as a starting point

This is where I think software could fundamentally change.

Today, we generally think of software as a finished product.

A company builds an application. Developers decide how it should work. Designers decide how it should look. Users then learn how to use that application.

We allow some customization, but the fundamental experience is still decided by the people who built the product.

Maybe that doesn't have to remain true.

Maybe the application should be more like a starting point.

The company provides the capabilities, the data, the APIs, the business logic, the security model, and the building blocks.

The user then builds their own experience on top of those building blocks.

And increasingly, an agent could do much of that work for them.

The user could essentially say:

> This is how I work. These are the things I care about. This is what I want to see. This is what I want the software to do for me.

And the software could adapt itself around that.

## This doesn't make developers less important

I don't think this means that developers become less important or that development teams can stop thinking about the product.

In some ways, it could make their job more important.

Instead of spending all of their time trying to predict every possible way a user might want to use the product, developers could focus on creating powerful and reliable primitives that can be combined in many different ways.

We could provide better APIs.

Better data models.

Better extension points.

Better building blocks.

Better permissions.

Better ways for agents to understand what the software can do.

The development team would still be responsible for making sure the system is reliable and coherent. But they wouldn't necessarily have to manually build every possible experience that a user might want.

They would build the foundation that allows those experiences to be created.

## The architecture changes

Of course, this is not easy.

If we allow an agent to change the way a user interacts with our software, we need to think very carefully about how the system is designed.

We cannot simply give an agent unrestricted access to everything and expect the result to be good.

There need to be boundaries.

The company might define the primitives that can be used. It might define permissions, business rules, design-system components, data access rules, and other constraints.

The agent can then create experiences within those boundaries.

This also creates significant security questions.

What is the agent allowed to change?

What data can it access?

What actions can it take?

How do we make changes reversible?

How do we prevent one user's customization from affecting another user?

How do we make sure an agent doesn't create something that violates the rules of the system?

These are not small problems.

But they are problems that we will increasingly have to think about if software is going to become something that agents can adapt.

## The interface becomes a conversation

There is also something interesting happening to the idea of an interface itself.

An interface doesn't necessarily have to mean a fixed collection of screens.

Different people might want to communicate with the same application in completely different ways.

Someone might want a dashboard.

Someone else might want a conversational interface.

Someone might want a very simple interface with only a few actions.

Someone else might want an automated agent that performs most of the work without requiring them to interact with the application directly.

All of these could potentially sit on top of the same underlying software.

The important thing is that the user gets to decide how they want to communicate with the system.

## From applications to foundations

Maybe the future of software isn't about building the perfect application for everyone.

Maybe it's about building software that is capable of becoming the right application for each person.

We have spent decades building increasingly powerful applications and then trying to design interfaces that allow everyone to access that power.

Perhaps the next step is to separate those two things.

Build extremely capable systems.

Then allow those systems to adapt their experience to the person using them.

The application that a company ships would no longer necessarily be the final form of the software.

It would be the foundation.

And the user, with the help of an agent, could build the version of that software that actually makes sense for them.

That, to me, is one of the more interesting questions about where software development should go next.
