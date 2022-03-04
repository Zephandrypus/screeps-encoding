# screeps-encoding
This repository is an attempt to create a standardized set of encoding rules for objects in Screeps, when making use of `RawMemory`.

# Terminology
For conciseness sake, the hypothetical implementation of this encoding will be referred to as `Memory`, because the actual parsed-JSON `Memory` object will never be mentioned.

For clarity when discussing both "objects" as in objects returned by `Game.getObjectById` and "objects" as in your personal data structures, the former will always be referred to as "room objects" or "game objects", and the latter as just plain "objects".
