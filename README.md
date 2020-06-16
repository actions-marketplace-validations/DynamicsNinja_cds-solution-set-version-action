# CDS Solution Set Version Action

Set version of CDS solution.

## Inputs

### `solution-xml-path`

**Required** Path to the folder where the Solution.xml is located.

### `solution-version`

**Required** Version of the solution.

## Outputs

### `result`

Returns `success` if XML has been updated.

## Example usage

    uses: DynamicsNinja/cds-solution-set-version-action@v1
    with:
      solution-xml-path: 'Solutions/src/Other'
      solution-version: '1.2.3'