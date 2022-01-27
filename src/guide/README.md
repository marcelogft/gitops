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

## Changes are made via pull requests

With GitOps, troubleshooting becomes easier and faster, since we fix a production issue via a pull request rather than tinkering directly with a running system. 
If we limit cluster access to a handful of privileged admins, we can apply the same Git workflow to both operations and development. 

Changes to the application and cluster can then be contained to the following activities:

* Updates to container images

* Updates to the declarative specification, or in other words, the desired state

* Errors in the environment, like container malfunctions

## Convergence ensures eventual consistency

If a group of configuration updates is made by a human, the observed state in the cluster can drift from the desired state declared in Git, thus causing divergence. 
When the desired and observed states are different, Kubernetes provides a convergence mechanism to drive the observed state towards what the teams declared as the desired state in version control. The Kubernetes orchestrator will apply changes to the cluster until its state has converged to the declared configuration.

After a configurable interval, an alert could be generated if the states are still divergent. As an implementation detail, a tool that can send alerts is *kubediff*. 

Convergence is eventual and could be indicated by zero alerts. As a refresher, idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application. Convergence should be idempotent, as in, multiple applications of convergence should have the same outcome. To sum it up, think of convergence as a reconciliation loop that eventually brings the cluster to its desired state.

This model works for any Kubernetes resource and is extensible using Kubernetes Custom Resource Definitions (CRDs).  

## References

* [Weave Works Blog](https://www.weave.works/blog/what-is-gitops-really)
* [CloudBees](https://www.cloudbees.com/gitops/what-is-gitops/)