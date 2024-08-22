# area file

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

```bash title="results"
First line: <# of triangles>
Following lines: <triangle #> <maximum area>
```

- An area file associates with each triangle a maximum area that is used for mesh refinement.
- As with other file formats, every triangle must be represented, and they must be numbered consecutively (from one or zero).
- Blank lines and comments prefixed by `#` may be placed anywhere.
- A triangle may be left unconstrained by assigning it a negative maximum area.
