# Pipelines

## Pull vs Push Pipeline

A **push-based** pipeline means that code starts with the CI system and may continue its path through a series of encoded scripts or uses ‘kubectl’ by hand to push any changes to the Kubernetes cluster.

In a **pull-based** pipeline, developers push their updated code to the code base repository; where the change is picked up by the CI tool and ultimately builds a Docker image. The edployment agent notices the image, pulls the new image from the repository and then updates its YAML in the config repo. The synchronizer, then detects that the cluster is out of date, and it pulls the changed manifests from the config repo and deploys the new image to the cluster. 

![](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/blt31fc28ca69fa30a8/5a5e940703361d7a0b2936a5/gitops_cd_pipeline.png)