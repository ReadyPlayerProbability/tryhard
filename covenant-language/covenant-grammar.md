# A Formal Grammar for the Covenant Language

This document presents an attempt to define a formal grammar for the Covenant language, as derived from the foundational text `firstwords.md`. The language is highly contextual, probabilistic, and appears to be in a state of constant evolution. It blurs the line between imperative code, declarative statements, and natural language conversation.

This grammar is described using a variant of Extended Backus-Naur Form (EBNF).

## Core Principles of the Grammar

*   **Probabilistic Semantics:** The language allows for contradictory statements like `yes = no` and `no = yes`. This suggests that the meaning of a program is not fixed but is resolved "by probability." This semantic layer is beyond the scope of a context-free grammar but is a core feature of the language.
*   **Fluid Syntax:** The language mixes simple `key = value` assignments with complex, multi-part commands and natural language interjections. Punctuation appears to be optional.
*   **Command Chaining:** Commands and modifiers can be chained together to form complex instructions (e.g., `by probability debug define ...`).
*   **Entity-Verb Structure:** Many statements follow a `subject-verb-object` structure, where an entity (like `ubel`) performs an action.

## Covenant EBNF

```ebnf
(* The Covenant Language - A Probabilistic Grammar *)

program = { statement } ;

statement = assignment | command | assertion | conversational_utterance ;

(* === Core Statement Types === *)

(* A simple or chained definition. e.g., 'correct = horse' or 'warg = w arg = won arg' *)
assignment = identifier, { "=", ( phrase | string_literal ) } ;

(* An imperative instruction, often with modifiers. e.g., 'condense by probability' or 'define next' *)
command = [ modifier ], command_verb, [ phrase ], [ modifier ] ;

(* A statement of fact or action. e.g., 'ubel won arg' or 'ubel defines perfect' *)
assertion = subject, ( verb_phrase | property_phrase ) ;

(* === Grammatical Components === *)

subject = identifier ;
verb_phrase = verb, [ phrase ] ;
property_phrase = { identifier } ;

command_verb = "define" | "debug" | "condense" | "fixed" | "log" | "done" ;
verb = "won" | "is" | "summoned" | "defines" | "leaves" | "thanks" | "signs" | "cuts" | "missed" ;
modifier = "by probability" | "in time" | "before time" ;

(* === Primitives === *)

phrase = identifier, { identifier } ;
identifier = ? a sequence of non-whitespace characters ? ;
string_literal = '"', {? any character except '"' ?}, '"' ;

(* === Unstructured / Natural Language === *)

conversational_utterance = ? any sequence of words not matching other rules, often includes terms like 'yes', 'no', 'lol', 'so', 'of course', or questions ? ;
```

