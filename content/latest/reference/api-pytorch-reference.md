# `det.pytorch` API Reference

::: {.meta description="Familiarize yourself with the det.pytorch API. This PyTorch-based training loop includes the PyTorchTrial class, the PyTorchTrialContext class, and the Trainer class."}
:::

  --------------------------------------------
  User Guide
  --------------------------------------------
  `pytorch_trial_ug`{.interpreted-text
  role="ref"}

  --------------------------------------------

Determined offers a PyTorch-based training loop that is fully integrated
with the Determined platform which includes:

-   `~determined.pytorch.PyTorchTrial`{.interpreted-text role="class"},
    which you must subclass to define things like model architecture,
    optimizer, data loaders, and how to train or validate a single
    batch.
-   `~determined.pytorch.PyTorchTrialContext`{.interpreted-text
    role="class"}, which can be accessed from within `PyTorchTrial` and
    contains runtime methods used for training with the `PyTorch` API.
-   `~determined.pytorch.Trainer`{.interpreted-text role="class"}, which
    is used for customizing and executing the training loop around a
    `PyTorchTrial`.

## `determined.pytorch.PyTorchTrial` {#pytorch_api_ref}

::: {.autoclass members="" member-order="bysource" special-members="__init__"}
determined.pytorch.PyTorchTrial
:::

## `determined.pytorch.PyTorchTrialContext`

::: {.autoclass members=""}
determined.pytorch.PyTorchTrialContext
:::

## `determined.pytorch.PyTorchTrialContext.distributed`

::: {.autoclass members="" inherited-members="" member-order="bysource" noindex=""}
determined.core.\_distributed.DistributedContext
:::

## `determined.pytorch.PyTorchExperimentalContext`

::: {.autoclass members="" exclude-members="reduce_metrics, reset_reducers, wrap_reducer"}
determined.pytorch.PyTorchExperimentalContext
:::

## `determined.pytorch.DataLoader` {#pytorch-dataloader}

::: {.autoclass members=""}
determined.pytorch.DataLoader
:::

## `determined.pytorch.LRScheduler`

::: {.autoclass members="" special-members="__init__"}
determined.pytorch.LRScheduler
:::

## `determined.pytorch.Reducer`

::: {.autoclass members=""}
determined.pytorch.Reducer
:::

## `determined.pytorch.MetricReducer` {#pytorch-metric-reducer}

::: {.autoclass members="reset, per_slot_reduce, cross_slot_reduce" member-order="bysource"}
determined.pytorch.MetricReducer
:::

## `determined.pytorch.PyTorchCallback` {#pytorch-callbacks}

::: {.autoclass members=""}
determined.pytorch.PyTorchCallback
:::

## `determined.pytorch.load_trial_from_checkpoint_path`

::: autofunction
determined.pytorch.load_trial_from_checkpoint_path
:::

## `determined.pytorch.Trainer`

::: {.autoclass members=""}
determined.pytorch.Trainer
:::

## `determined.pytorch.init()`

::: autofunction
determined.pytorch.init
:::
