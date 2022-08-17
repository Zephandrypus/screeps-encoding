# screeps-encoding
This repository is an attempt to create a standardized set of encoding rules for objects in Screeps, when making use of `RawMemory`.

# Terminology
For conciseness sake, the hypothetical implementation of this encoding will be referred to as `Memory`, because the actual parsed-JSON `Memory` object will never be mentioned.

For clarity when discussing both "objects" as in objects returned by `Game.getObjectById` and "objects" as in your personal data structures, the former will always be referred to as "room objects" or "game objects", and the latter as "our objects" or just plain "objects".

# Typed Arrays
Contrary to popular belief, Javascript can be very fast, especially after compiler optimizations. Your code just has to operate predictably enough for the compiler to be able to streamline things under the hood. Using and abusing `ArrayBuffer` and the typed arrays can guarantee this, but aren't strictly necessary if you make things easier for the compiler (TypeScript helps).
