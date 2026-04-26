# React + TypeScript + Vite


## Reflection
1. How did you handle optional props in your components?
I handled optional props by checking if they exists before rendering them. for Example, in ProductDisplay, I only show the description when showDescription is true

2. What considerations did you make when designing the component interfaces?
I focused on clear data types, reusable props, optional props for flexibiltiy 

3. How did you ensure type safety across your components?
I ensured type safety by using TypeScript interfaces for my data and props. Each component has a proper interface

4. What challenges did you face when implementing component composition?
One challenge I faced was understanding how to pass data from parent to child components using props and how to pass extra JSX using children

Another challenge was styling the composed componets with Tailwind.

Overall, component composition helped me keep the code reusable
