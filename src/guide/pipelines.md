# Pipelines

**Continuous integration (CI)** is a software development practice in which all developers merge code changes in a central repository (Git). With CI, each code change
(commit) triggers an automated build-and-test stage for the given repo and provides feedback to the developer(s) who made the change. The main difference between GitOps compared to traditional CI is that with GitOps, the CI pipeline also updates the application manifest with the new image version after the build and test
stages have been completed successfully. 

**Continuous delivery (CD)** is the practice of automating the entire software release process. CD includes infrastructure provisioning in addition to deployment. What makes
GitOps CD different from traditional CD is using a GitOps operator to monitor the manifest changes and orchestrate the deployment. As long as the CI build is complete and
the manifest is updated, the GitOps operator takes care of the eventual deployment. 

## Pull vs Push Pipeline

A **push-based** pipeline means that code starts with the CI system and may continue its path through a series of encoded scripts or uses ‘kubectl’ by hand to push any changes to the Kubernetes cluster.

In a **pull-based** pipeline, developers push their updated code to the code base repository; where the change is picked up by the CI tool and ultimately builds a Docker image. The edployment agent notices the image, pulls the new image from the repository and then updates its YAML in the config repo. The synchronizer, then detects that the cluster is out of date, and it pulls the changed manifests from the config repo and deploys the new image to the cluster.  

<ImgCard url="https://images.contentstack.io/v3/assets/blt300387d93dabf50e/blt31fc28ca69fa30a8/5a5e940703361d7a0b2936a5/gitops_cd_pipeline.png" width="700" ></ImgCard>