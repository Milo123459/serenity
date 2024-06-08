searchState.loadedDescShard("serenity", 2, "Attempts to acquire this <code>RwLock</code> with exclusive write …\nAttempts to acquire this <code>RwLock</code> with exclusive write …\nCreates a new instance of an <code>RwLock&lt;T&gt;</code> which is unlocked …\nLocks this <code>RwLock</code> with exclusive write access, causing the …\nLocks this <code>RwLock</code> with exclusive write access, causing the …\nParse a value from a string in context of a received …\nError that can be returned from <code>Channel::convert</code>.\nDescribes formatting on string content\nFormatting modifiers for MessageBuilder content pushes\nStruct that allows to alter <code>content_safe</code>’s behaviour.\nConvenience builder to create a modal, wait for the user …\nA builder for constructing a personal <code>Message</code> instance. …\nA trait with additional functionality over the …\nError that can be returned from <code>Emoji::convert</code>.\nThe associated error which can be returned from parsing.\nGuild was not in cache, or guild HTTP request failed.\nRepresents a combination of a timestamp and a style for …\nAn error that can occur when parsing a <code>FormattedTimestamp</code> …\nEnum representing various styles for formatting time in …\nError that can be returned from <code>GuildChannel::convert</code>.\nThe guild in which the parser was invoked is not in cache.\nError that can be returned from <code>Guild::convert</code>.\nWhen message data retrieval via HTTP failed\nWhen channel retrieval via HTTP failed\nWhen channel retrieval via HTTP failed\nHTTP error while retrieving guild roles.\nWhen the <code>gateway</code> feature is disabled and the required …\nRepresents a long date format, e.g., “November 17, 2023…\nRepresents a long date and time format, e.g., “Thursday, …\nRepresents a long time format, e.g., “12:34:56 PM”.\nWhen the provided string does not adhere to any known …\nError that can be returned from <code>Member::convert</code>.\nThe Message Builder is an ergonomic utility to easily …\nError that can be returned from <code>Message::convert</code>.\nNo cache, so no guild search could be done.\nWhen the referenced channel is not a guild channel\nThe provided member string failed to parse, or the parsed …\nThe provided user string failed to parse, or the parsed …\nThe provided channel string failed to parse, or the parsed …\nThe provided channel string failed to parse, or the parsed …\nThe provided guild string failed to parse, or the parsed …\nThe provided channel string failed to parse, or the parsed …\nThe provided emoji string failed to parse, or the parsed …\nWhen the guild’s roles were not found in cache.\nWhen the operation was invoked outside a guild.\nParser was invoked outside a guild.\nParser was invoked outside a guild.\nRepresents a relative time format, indicating the time …\nError that can be returned from <code>Role::convert</code>.\nRepresents a short date format, e.g., “2023-11-17”.\nRepresents a short date and time format, e.g., “November …\nRepresents a short time format, e.g., “12:34 PM”.\nError that can be returned from <code>User::convert</code>.\nAssign the dummy message files attached to it.\nAssign the dummy message its author.\nConsume this builder and return the constructed message.\nPulls the inner value out of the builder.\nMentions the <code>GuildChannel</code> in the built message.\nAssign the dummy message its origin channel’s ID.\nIf set to true, <code>content_safe</code> will replace channel mentions …\nIf set, <code>content_safe</code> will replace <code>@everyone</code> with a …\nIf set, <code>content_safe</code> will replace <code>@here</code> with a non-pinging …\n<code>content_safe</code> will replace role mentions (<code>&lt;@&amp;{id}&gt;</code>) with …\nIf set to true, <code>content_safe</code> will replace user mentions (…\nAssign the dummy message its contents.\nTransforms role, channel, user, <code>@everyone</code> and <code>@here</code> …\nParses a string <code>s</code> as a command parameter of this type.\nInstantiates with all options set to <code>true</code>.\nIf set, <code>content_safe</code> will replace a user mention with the …\nAssign the dummy message the timestamp it was edited.\nAssign the dummy message embeds.\nDisplays the given emoji in the built message.\nErrors\nAdds an input text field.\nFormats the message builder into a string.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>FormattedTimestamp</code> instance from the given …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAssign the dummy message its origin guild’s ID.\nAssign the dummy message a proper ID for identification.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAssign the dummy message its type.\nAssign the dummy message member data pertaining to its …\nMentions something that implements the <code>Mentionable</code> trait.\nAssign the dummy message a flag whether it mentions …\nAssign the dummy message a list of roles it mentions.\nAssign the dummy message a list of mentions.\nConstructs a new instance of this builder, alongside a …\nCreates a new <code>FormattedTimestamp</code> instance from the given …\nCreates a new, empty builder.\nCreates a new <code>FormattedTimestamp</code> instance representing the …\nConvenience method to add a multi-line input text field.\nRetrieves an Id from a channel mention.\nRetrieves the animated state, name and Id from an emoji …\nRetrieves the “code” part of an invite out of a URL.\nRetrieves IDs from “{channel ID}-{message ID}” …\nRetrieves guild, channel, and message ID from a message …\nTurns a string into a vector of string arguments, …\nRetrieves an Id from a role mention.\nRetrieves an Id from a user mention.\nRetrieves the username and discriminator out of a user tag …\nParses the id and token from a webhook url. Expects a …\nAssign the dummy message a flag whether it’s been pinned.\nPushes a string to the internal message content.\nPushes an inline bold text to the content.\nPushes an inline bold text with an added newline to the …\nPushes an inline bold text with added newline to the …\nPushes an inline bold text to the content normalizing …\nPushes a codeblock to the content, with optional syntax …\nPushes a code-block to your message normalizing content.\nPushes inlined italicized text to the content.\nPushes an inlined italicized text with an added newline to …\nPushes an inline italicized text with added newline to the …\nPushes an inline italicized text to the content …\nPushes the given text with a newline appended to the …\nPushes text with a newline appended to the content …\nPushes inlined monospaced text to the content.\nPushes inlined monospace text with an added newline to the …\nPushes an inline monospaced text with added newline to the …\nPushes an inline monospaced text to the content …\nPushes a named link to a message, intended for use in …\nPushes a named link intended for use in an embed, but with …\nPushes a quoted inline text to the content\nPushes a quoted inline text to the content\nPushes a quoted inline text with added newline to the …\nPushes a quoted inline text to the content normalizing …\nPushes text to your message, but normalizing content - …\nPushes a spoiler’d inline text to the content.\nPushes a spoiler’d inline text with a newline added to …\nPushes a spoiler’d inline text with added newline to the …\nPushes a spoiler’d inline text to the content …\nPushes a strikethrough inline text to the content.\nPushes a strikethrough inline text with a newline added to …\nPushes a strikethrough inline text with added newline to …\nPushes a strikethrough inline text to the content …\nPushes an underlined inline text to the content.\nPushes an underlined inline text with an added newline to …\nPushes an underlined inline text with added newline to the …\nPushes an underlined inline text to the content …\nStarts a multi-line quote, every push after this one will …\nAssign the dummy message a list of emojis it was reacted …\nMentions the <code>Role</code> in the built message.\nCalculates the Id of the shard responsible for a guild, …\nConvenience method to add a single-line input text field.\nIf set to true, if <code>content_safe</code> replaces a user mention it …\nReturns the style of this <code>FormattedTimestamp</code>.\nSets a timeout when waiting for the modal response.\nAssign the dummy message the timestamp it was created at.\nReturns the timestamp of this <code>FormattedTimestamp</code>.\nUtilities to parse and validate Discord tokens.\nAssign the dummy message a flag whether it’ll be read by …\nMentions the <code>User</code> in the built message.\nValidates that a token is likely in a valid format.\nAssign the dummy message the webhook author’s ID.\nError that can be return by <code>validate</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nValidates that a token is likely in a valid format.")