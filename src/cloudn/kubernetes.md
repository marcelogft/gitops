# Kubernetes

[Kubernetes](https://kubernetes.io/), also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kubernetes_logo.svg/1280px-Kubernetes_logo.svg.png)


## Sidecars 

In Kubernetes, a pod is a group of one or more containers with shared storage and network. A sidecar is a **utility container** in a pod that’s loosely coupled to the main application container.

Perhaps the most well known use case of sidecars is proxies in a service mesh architecture, but there are other examples, including log shippers, monitoring agents or data loaders.
