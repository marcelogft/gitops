# An operating model for building cloud native applications

GitOps works by using Git as a single source of truth for declarative infrastructure and applications. 
 
![](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltccdc2969d11fa365/5b7afd0d1739fa520bbbb0bd/git-diagram.png) 

With GitOps, the use of software agents can alert on any divergence between Git with what's running in a cluster, and if there's a difference, Kubernetes reconcilers automatically update or rollback the cluster depending on the case.

 With Git at the center of your delivery pipelines, developers use familiar tools to make pull requests to accelerate and simplify both application deployments and operations tasks to Kubernetes.

## Principles

### The entire system described declaratively.
  
Declarative means that configuration is guaranteed by a set of facts instead of by a set of instructions. 

With your application’s declarations versioned in Git, you have a **single source of truth.**

### The canonical desired system state versioned in Git.
  
Use a `Git revert` to go back to your previous application state.

### Approved changes that can be automatically applied to the system.  
  
With GitOps, there is a segregated environment of which the state definition lives outside. This allows you to separate what you do and how you're going to do it.
 Software agents to ensure correctness and alert on divergence.


### Software agents can inform you whenever reality doesn’t match your expectations. 
  
 The use of agents also ensures that your entire system is self-healing. software agents act as the feedback and control loop for your operations.


## References

* [Weave Works Blog](https://www.weave.works/blog/what-is-gitops-really)