# Kubernetes

[Kubernetes](https://kubernetes.io/), also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

<ImgCard url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kubernetes_logo.svg/1280px-Kubernetes_logo.svg.png" width="500" ></ImgCard>

While Docker solved the packaging and isolation problem of individual applications, there were still many questions about how to orchestrate the operation of multiple applications into a working distributed system:

* How do containers communicate?
* How is traffic routed between containers?
* How are containers scaled up to handle additional application load?
* How is the underlying infrastructure of the cluster scaled up to run the required containers?
  
All these operations are the responsibility of a container orchestration system and are provided by Kubernetes. Kubernetes helps to automate the deployment, scaling, and  management of applications using containers

Kubernetes is an extensive and robust system with many different types of resources and operations that can be performed on those resources. Kubernetes provides a layer of abstraction over the infrastructure and introduces the following set of basic objects that represent the desired cluster state:

* Pod: A group of containers deployed together on the same host. The Pod is the smallest deployable unit on a node and provides a way to mount storage, set environment  variables, and provide other container configuration information. When all the containers of a Pod exit, the Pod dies also.
 
* Service: An abstraction that defines a logical set of Pods and a policy to access them.
  
* Volume: A directory accessible to containers running in a Pod.

* ReplicaSet—Defines that a desired number of identically configured Pods are running. If a Pod in the ReplicaSet terminates, a new Pod will be started to
  bring the number of running Pods back to the desired number.

* Deployment: Enables declarative updates for Pods and ReplicaSets.
  
* Job: Creates one or more Pods that run to completion.
  
* CronJob: Creates Jobs on a time-based schedule

## Sidecars 

A Pod is the basic atomic unit of deployment in Kubernetes. 

A sidecar is a **utility container** in a pod that’s loosely coupled to the main application container.

Perhaps the most well known use case of sidecars is proxies in a service mesh architecture, but there are other examples, including log shippers, monitoring agents or data loaders.

Typically, a Pod contains a single container. However, multiple containers can be placed in the same Pod. All containers running on the same Pod share the same volume and network interface of the Pod. 

Actually, the Pod itself is a container that executes the pause command. Its sole purpose is to hold the network interfaces and the Linux namespaces needed to run other containers.

<ImgCard url="https://www.magalix.com/hs-fs/hubfs/SideCar.jpg?width=498&name=SideCar.jpg" width="500" ></ImgCard>
 