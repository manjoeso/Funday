json.array! @workspace.boards do |board|
    json.id board.id
    json.title board.title
end