Start of every id (except Null):

|bits 1-8|bits 9-32|
|:---:|:---:|
|id type|random id|
|byte < 80|uint24|

***

Null:

|bits 1-8|
|:---:|
|0|
|byte|

***

Tiny object id:

|bits 1-8|bits 9-32|
|:---:|:---:|
|1|random id|
|byte|uint24|

Used for arrays of objects with a known type.

***

Short object id:

|bits 1-8|bits 9-32|bits 33-48|
|:---:|:---:|:---:|
|2|random id|object type|
|byte|uint24|uint16|

Used for arrays of objects with variable types.

***

Medium object id:

|bits 1-8|bits 9-32|bits 33-64|
|:---:|:---:|:---:|
|3|random id|properties present|
|byte|uint24|32 bit flags|

Used for arrays of objects with a known type but potentially null properties.

***

Long object id:

|bits 1-8|bits 9-32|bits 33-48|bits 49-80|bits 81-96|
|:---:|:---:|:---:|:---:|:---:|
|4|random id|object type|properties present|custom|
|byte|uint24|uint16|32 bit flags|any|

Used for arrays of objects with variable types and potentially null properties.

***

Game object id suffix:

|bits 1-8|bits 9-32|
|:---:|:---:|
|21|last 3 bytes|

For instances where the id is - instead of being used to reference the game object - solely used to check when a game object is part of a list. The last three bytes of game object ids are unique to each game object, as far as I'm aware. 
