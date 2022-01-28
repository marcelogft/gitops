# Infrastructure as Code 

Infrastructure as Code (IAC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

IAC is a common practice in cloud native computing environments, where the infrastructure is defined in a declarative format, and the software is deployed in a declarative manner.

![](https://blog.stackpath.com/wp-content/uploads/2020/01/infrastructure-as-code.png)

## Idempotency

Idempotency means no matter how many times you run your IaC and, what your starting state is, you will end up with the same end state. This simplifies the provisioning of Infrastructure and reduces the chances of inconsistent results.

## Inmutable infrastructure

In a traditional mutable server infrastructure, servers are continually updated and modified in place. Engineers and administrators working with this kind of infrastructure can SSH into their servers, upgrade or downgrade packages manually, tweak configuration files on a server-by-server basis, and deploy new code directly onto existing servers. In other words, these servers are **mutable**; they can be changed after they’re created. Infrastructure comprised of mutable servers can itself be called mutable, traditional, or (disparagingly) artisanal.

**Immutable infrastructure** is an approach to managing services and software deployments on IT resources wherein components are replaced rather than changed. An application or services is effectively redeployed each time any change occurs.

Immutability restricts the potential for configuration drift, reducing the IT infrastructure's vulnerability to attack. Uptime is improved in unexpected events, because instances are redeployed instead of restored from multiple unique configurations and versions.

The most fundamental difference between mutable and immutable infrastructure is in their central policy: the components of the former are designed to be changed after deployment; the components of the latter are designed to remain unchanged and ultimately be replaced

The traditional mutable approach to infrastructure causes delays in the DevOps pipeline. Dependencies can make application deployments difficult and human innovation is actually slowed down by technology. Immutable IaC creates consistent environments that allow for automated testing and deployment that accelerates the DevOps process and eliminates delays and clogs in the pipeline.

## Scaling IaC: Environment as Code 

Scaling IaC is a process of creating a set of infrastructure components that can be deployed in a single step. This is called **environment as code**.

Environment as Code (EaC) is an abstraction over Infrastructure as Code that provides a declarative  way of defining an entire Environment. It has a Control Plane that manages the state of the environment, including relationships between various resources, Detects Drift as well enables Reconciliation. It also supports best practices  like Loose Coupling, Idempotency, Immutability, etc. for the entire environment. EaC allows teams to deliver entire environments rapidly and reliably, at scale.

* Ability to define Entire Environment
* Loosely Coupled
* Manage State for the entire Environment
* Idempotent and Immutable for entire Environment 
* Visualize and Understand Environments
* Drift Detection and Reconciliation
* Compare and Promote Changes between Environments

## Tools

### Infrastructure as Code Provisioning tools

* [Terraform](https://www.terraform.io/) is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.

* [Pulumi](https://pulumi.io/) is a cloud native development platform that allows developers to build, deploy, and manage infrastructure as code.

* [AWS CloudFormation](https://aws.amazon.com/cloudformation/) is a tool for creating and managing AWS infrastructure.

* [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops) is a cloud-based tool for managing Azure resources.

### Configuration management tools

* [Ansible](https://www.ansible.com/) is a tool for automating deployment, configuration management, and application deployment. It is used in a wide variety of environments, including servers, virtual machines, and cloud environments.

* [Chef](https://www.chef.io/) is a platform for managing and provisioning software.

* [Puppet](https://puppet.com/) is a software configuration management system that is used to manage infrastructure, deploy software, and manage infrastructure.